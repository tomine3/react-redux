import * as React from "react";
import * as ReactDom from "react-dom";
import HelloComponent from "./hello/Hello";

ReactDom.render(
  //HelloComponentをレンダリング。レンダリング先にはindex.htmlのid=helloを指定
  //HelloComponentにcontentを引き渡している
  <HelloComponent content={"Hello World!"}/>
  , document.getElementById("hello")
);