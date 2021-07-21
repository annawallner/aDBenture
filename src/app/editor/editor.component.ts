import { Component, ViewChild, AfterViewInit } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/sql/sql.js';
import { WindowRef } from '../WindowRef';

@Component({
  selector: 'app-root',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {
  title = 'app';
  @ViewChild('myEditor') myEditor;

  constructor(private winRef: WindowRef) {
  }

  ngAfterViewInit() {
    const mime = 'text/x-mariadb';
    const currentWindow = this.winRef.nativeWindow;
    // get mime type
    // if (currentWindow.location.href.indexOf('mime=') > -1) {
    //   mime = currentWindow.location.href.substr(currentWindow.location.href.indexOf('mime=') + 5);
    // }
    currentWindow.editor = CodeMirror.fromTextArea(this.myEditor.nativeElement, {
      mode: mime,
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      // matchBrackets: true,
      autofocus: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
      // hintOptions: {
      //   tables: {
      //     users: ['name', 'score', 'birthDate'],
      //     countries: ['name', 'population', 'size']
      //   }
      // }
    });
  }
}