import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";
import "./Editor.css";
import { useEffect, useRef } from "react";

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.

const Editor = (props) => {
  let created = useRef(false);
  useEffect(() => {
    if (!created.current) {
      created.current = true;
      const mySchema = new Schema({
        nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
        marks: schema.spec.marks,
      });
      window.view = new EditorView(document.querySelector("#editor"), {
        state: EditorState.create({
          doc: DOMParser.fromSchema(mySchema).parse(
            document.querySelector("#content")
          ),
          plugins: exampleSetup({ schema: mySchema }),
        }),
      });
    }
  });

  return (
    <>
      <div id="editor" />
      <div id="content" />
    </>
  );
};

export default Editor;
