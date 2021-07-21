import {Component, OnInit, ViewChild} from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/sql/sql.js';
import {WindowRef} from '../WindowRef';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @ViewChild('Editor') Editor;

  constructor(private winRef: WindowRef) {
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const mime = 'text/x-mariadb';
    const currentWindow = this.winRef.nativeWindow;
    currentWindow.editor = CodeMirror.fromTextArea(this.Editor.nativeElement, {
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
