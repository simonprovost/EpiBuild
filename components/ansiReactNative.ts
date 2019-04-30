import { AnserJsonEntry, ansiToJson } from "anser";
import {Text} from "react-native";
import { escapeCarriageReturn } from "escape-carriage";
import * as React from "react";


const LINK_REGEX = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;

/**
 * Converts ANSI strings into JSON output.
 * @name ansiToJSON
 * @function
 * @param {String} input The input string.
 * @return {Array} The parsed input.
 */
function ansiToJSON(input: string, use_classes = false) {
  input = escapeCarriageReturn(input);
  return ansiToJson(input, {
    json: true,
    remove_empty: true,
    use_classes
  });
}

/**
 * Create a class string.
 * @name createClass
 * @function
 * @param {AnserJsonEntry}.;
 * @return {String} class name(s)
 */
function createClass(bundle: AnserJsonEntry) {
  let classNames: string = "";

  if (!bundle.bg && !bundle.fg) {
    return null;
  }
  if (bundle.bg) {
    classNames += bundle.bg + " ";
  }
  if (bundle.fg) {
    classNames += bundle.fg + " ";
  }

  classNames = classNames.substring(0, classNames.length - 1);
  return classNames;
}

/**
 * Create the style attribute.
 * @name createStyle
 * @function
 * @return {Object} returns the style object
 * @param bundle
 */
function createStyle(bundle: AnserJsonEntry) {
  const style: { backgroundColor?: string; color?: string; fontFamily?: string; fontSize?: number; } = {};

  if (bundle.bg) {
    style.backgroundColor = `rgb(${bundle.bg})`;
    style.fontFamily = 'monospace';
    style.fontSize = 11;
  } if (bundle.fg) {
    style.color = `rgb(${bundle.fg})`;
    style.fontFamily = 'monospace';
    style.fontSize = 11;
  } else {
    style.color = `rgb(255,255,255)`;
    style.fontFamily = 'monospace';
    style.fontSize = 11;
  }
  return style;
}

/**
 * Converts an Anser bundle into a React Node.
 * @param linkify whether links should be converting into clickable anchor tags.
 * @param useClasses should render the "Text" with a class instead of style.
 * @param bundle Anser output.
 */

function convertBundleIntoReact(
    linkify: boolean,
    useClasses: boolean,
    bundle: AnserJsonEntry,
    key: number
) {
  const style = useClasses ? null : createStyle(bundle);

  if (!linkify) {
    return React.createElement(Text,
        { style, key },
        bundle.content
    );
  }

  const words = bundle.content.split(" ").reduce(
      (words: React.ReactNode[], word: string, index: number) => {
        // If this isn't the first word, re-add the space removed from split.
        if (index !== 0) {
          words.push(" ");
        }

        // If  this isn't a link, just return the word as-is.
        if (!LINK_REGEX.test(word)) {
          words.push(word);
          return words;
        }

        words.push(
            React.createElement(
                "a",
                {
                  key: index,
                  href: word,
                  target: "_blank"
                },
                `${word}`
            )
        );
        return words;
      },
      [] as React.ReactNode[]
  );
  return React.createElement(Text, { style, key }, words);
}

declare interface Props {
  children: string;
  linkify: boolean;
  className?: string;
  useClasses?: boolean;
}

export default function Ansi(props: Props) {
  console.log("ENRY IN ANSI CONVERTER");
  const { className, useClasses, children, linkify } = props;
  return React.createElement(
      Text,
      { },
      ansiToJSON(children, !!useClasses).map(
          convertBundleIntoReact.bind(null, linkify, !!useClasses)
      )
  );
}