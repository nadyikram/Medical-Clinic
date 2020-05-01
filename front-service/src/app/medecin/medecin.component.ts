import { Component, Input, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})
export class MedecinComponent implements OnInit {

  @Input() id: number;
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() age: number;
  @Input() gender: string;
  @Input() specialty: string;
  @Input() tarif: number;
  @Input() disponible: boolean;

  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {
  }

}
