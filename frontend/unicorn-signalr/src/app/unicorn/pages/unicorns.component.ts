import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SignalrService } from 'src/app/shared/services/signalr.service';
import { UnicornService } from '../services/unicorn.service';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.scss']
})
export class UnicornsComponent implements OnInit {

  constructor(
    private signalrService: SignalrService,
    private unicornService: UnicornService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('unicorn', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/unicorn-horn.svg'));
   }

  ngOnInit(): void {
    this.signalrService.startConnection();
  }

  createUnicorn(): void {
    this.unicornService.createUnicorn().subscribe();
  }

  get unicorns() {
    return this.signalrService.getUnicorns;
  }

}
