import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/sql/sql.js';
import { WindowRef } from '../WindowRef';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

// standard is implements OnInit, with ngOnInit(): void{}
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild('myEditor') myEditor;

  constructor(private winRef: WindowRef) {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const mime = 'text/x-mariadb';
    const currentWindow = this.winRef.nativeWindow;
    currentWindow.editor = CodeMirror.fromTextArea(this.myEditor.nativeElement, {
      mode: mime,
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      // matchBrackets: true,
      autofocus: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
    });
  }
}
