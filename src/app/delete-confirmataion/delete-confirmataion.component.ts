import { Component, Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-confirmataion',
  templateUrl: './delete-confirmataion.component.html',
  styleUrls: ['./delete-confirmataion.component.css']
})
export class DeleteConfirmataionComponent implements OnInit {

  @Input() item:string | undefined

  @Output() onDelete = new EventEmitter

  @Output() onCancel = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
delete(){
  this.onDelete.emit(this.item)
alert("deleting......")
}
cancel(){
  this.onCancel.emit(this.item)
alert("cancelling.....")
}
}
