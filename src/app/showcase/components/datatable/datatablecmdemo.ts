import {Component,OnInit} from '@angular/core';
import {Car} from '../../components/domain/car';
import {CarService} from '../../service/carservice';
import {Message,MenuItem} from '../../../components/common/api';

@Component({
    templateUrl: './datatablecmdemo.html'
})
export class DataTableCMDemo implements OnInit {

    msgs: Message[];

    cars: Car[];

    selectedCar: Car;
    
    items: MenuItem[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
        
        // 自定义右键菜单配置
        this.items = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar)},
            {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar)}
        ];
    }

    viewCar(car: Car) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: '查看操作', detail: car.vin + ' - ' + car.brand});
    }

    deleteCar(car: Car) {
        
        let newCars = [];
        this.cars.forEach( el => {
            if(el.vin !== car.vin){
                newCars.push(el);
            }
        })
        this.cars = JSON.parse(JSON.stringify(newCars));
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: '删除操作', detail: car.vin + ' - ' + car.brand});
    }
}