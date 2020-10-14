import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-incremental',
  templateUrl: './incremental.component.html',
  styleUrls: ['./incremental.component.css']
})
export class IncrementalComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input() InProgress: number = 25;
  @Input() btnClass: string = 'btn-primary';
  @Output() OutProgress: EventEmitter<number> = new EventEmitter();

  get getPorcentaje() {
    return `${this.InProgress}%`;
  }

  changeValue(valor: number) {
    if (this.InProgress >= 100 && valor >= 0) {
      this.OutProgress.emit(100);
      return this.InProgress = 100;
    }
    if (this.InProgress <= 0 && valor <= 0) {
      this.OutProgress.emit(0);
      return this.InProgress = 0;
    }
    this.InProgress = this.InProgress + valor;
    this.OutProgress.emit(this.InProgress);
  }

  onChange(newValor: number) {
    if (newValor >= 100) {
      this.InProgress = 100;
    } else if (newValor <= 0) {
      this.InProgress = 0;
    } else {
      this.InProgress = newValor;
    }
    this.OutProgress.emit(this.InProgress);
  }

}
