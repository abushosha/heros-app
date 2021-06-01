import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heros } from 'src/app/core/constants/heros';
import { Hero } from 'src/app/core/models/hero.model';
import { TableHeader } from 'src/app/core/models/table.model';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {

  tableHeaders: TableHeader[] = [
    {
      value: 'Hero Name',
      type: 'string'
    },
    {
      value: 'Powers',
      type: 'string'
    },
    {
      value: 'Rate',
      type: 'string'
    },
    {
      value: 'Action',
      type: 'string'
    }
  ];

  heros: Hero[] = Heros;
  filteredHeros: Hero[] = Heros;

  constructor(private router: Router) {
    this.filteredHeros.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  ngOnInit(): void { }


  onViewProfile(row) {
    this.router.navigate(['/hero-profile', row.id])
  }

  onSearch(search: string) {
    this.filterHeros(search);
  }

  onSort(sortByName: boolean) {
    this.sortHeros(sortByName);
  }

  protected filterHeros(search: any) {
    if (!this.heros) {
      return;
    }
    if (!search) {
      this.filteredHeros = this.heros;
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredHeros = this.heros.filter(
      hero => hero.name.toLowerCase().indexOf(search) > -1
    );
  }

  sortHeros(sortByName: boolean) {
    if (sortByName) {
      this.filteredHeros.sort((a, b) => a.name > b.name ? 1 : -1);
    } else {
      this.filteredHeros.sort((a, b) => a.powers > b.powers ? 1 : -1);
    }
  }

}
