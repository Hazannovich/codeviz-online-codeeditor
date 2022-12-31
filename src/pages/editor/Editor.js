// import { EditorState } from "prosemirror-state";
// import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";
import { useEffect, useRef } from "react";
import { basicSetup, EditorView } from "codemirror";
import { EditorState, Compartment } from "@codemirror/state";
import { python } from "@codemirror/lang-python";
import "./Editor.css";
import "../../../node_modules/prosemirror-view/style/prosemirror.css";

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.

const Editor = (props) => {
  let created = useRef(false);
  /*   const editorSchema = new Schema({
    doc: { content: "" }
  }); */
  useEffect(() => {
    if (!created.current) {
      created.current = true;
      let language = new Compartment(),
        tabSize = new Compartment();

      let state = EditorState.create({
        extensions: [
          basicSetup,
          language.of(python()),
          tabSize.of(EditorState.tabSize.of(8)),
        ],
      });

      let view = new EditorView({
        state,
        parent: document.querySelector("#editor"),
      });
    }
  });

  return (
    <>
      <div className="w-screen h-screen" id="editor"></div>
    </>
  );
};

export default Editor;
