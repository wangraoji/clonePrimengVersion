import {Component} from '@angular/core';

@Component({
    selector: 'datatable-demos',
    template: `
        <div class="content-section SubSubMenu ui-helper-clearfix">
            <ul>
                <li><a [routerLink]="['/datatable']">&#9679; Basic(基本)</a></li>
                <li><a [routerLink]="['/datatable/facets']">&#9679; Facets(页眉和页脚)</a></li>
                <li><a [routerLink]="['/datatable/templating']">&#9679; Templating(自定义模板)</a></li>
                <li><a [routerLink]="['/datatable/colgroup']">&#9679; ColGroup(列合并)</a></li>
                <li><a [routerLink]="['/datatable/rowgroup']">&#9679; RowGroup(行合并)</a></li>
                <li><a [routerLink]="['/datatable/paginator']">&#9679; Paginator(分页)</a></li>
                <li><a [routerLink]="['/datatable/sort']">&#9679; Sort(排序)</a></li>
                <li><a [routerLink]="['/datatable/filter']">&#9679; Filter(过滤)</a></li>
                <li><a [routerLink]="['/datatable/selection']">&#9679; Selection(单元格单选/多选)</a></li>
                <li><a [routerLink]="['/datatable/editable']">&#9679; Editable(单元格编辑)</a></li>
                <li><a [routerLink]="['/datatable/rowexpansion']">&#9679; Expand(行展开查看明细)</a></li>
                <li><a [routerLink]="['/datatable/colresize']">&#9679; Resize(可拖动列宽)</a></li>
                <li><a [routerLink]="['/datatable/colreorder']">&#9679; Reorder(列拖动)</a></li>
                <li><a [routerLink]="['/datatable/scroll']">&#9679; Scroll(滚动)</a></li>
                <li><a [routerLink]="['/datatable/lazy']">&#9679; Lazy(懒加载)</a></li>
                <li><a [routerLink]="['/datatable/contextmenu']">&#9679; ContextMenu(右键菜单)</a></li>
                <li><a [routerLink]="['/datatable/coltoggler']">&#9679; ColToggler(列显示隐藏)</a></li>
                <li><a [routerLink]="['/datatable/responsive']">&#9679; Responsive(响应式表格)</a></li>
                <li><a [routerLink]="['/datatable/crud']">&#9679; Crud(单击弹出操作)</a></li>
                <li><a [routerLink]="['/datatable/export']">&#9679; Export(导出CSV格式)</a></li>
            </ul>
        </div>
    `
})
export class DataTableSubmenu {}
