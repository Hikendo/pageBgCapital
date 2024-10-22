import{a as C,b as f}from"./chunk-MDEG6TR3.js";import{Ea as r,Ha as u,R as m,Za as x,la as s,sa as c,ta as p,ua as a,va as n,wa as h,za as d}from"./chunk-MAEJGKCN.js";import"./chunk-AIZVJUQQ.js";function g(l,t){if(l&1&&(a(0,"div"),h(1,"apx-chart",13),n()),l&2){let e=t.$implicit;s(),p("series",e.series)("chart",e.chart)("title",e.title)}}var v=class l{chartOptions;intervalId;constructor(){this.chartOptions=[this.createChartOptions("line"),this.createChartOptions("bar"),this.createChartOptions("area")]}ngOnInit(){this.intervalId=setInterval(()=>{this.chartOptions.forEach(t=>{let e=Math.floor(Math.random()*100),o={x:this.formatDate(new Date),y:e};if(t.chart.type==="candlestick"){let i={x:this.formatDate(new Date),y:[e-10,e,e-20,e-5]};t.series[0].data.push(i)}else if(t.chart.type==="boxPlot"){let i={x:`Data ${t.series[0].data.length+1}`,y:[e-20,e-10,e,e+10,e+20]};t.series[0].data.push(i)}else if(t.chart.type==="bar"||t.chart.type==="line"||t.chart.type==="area"){let i={x:this.formatDate(new Date),y:e};t.series[0].data.push(i)}else t.series[0].data.push(e)})},1e3)}ngOnDestroy(){this.intervalId&&clearInterval(this.intervalId)}formatDate(t){let e=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear();return`${e}/${o}/${i}`}createChartOptions(t){return{series:[{name:"Valor de activos",data:Array.from({length:10},(o,i)=>({x:new Date().getTime()+i*1e3,y:Math.floor(Math.random()*100)}))}],chart:{type:t,height:350},title:{text:`Gr\xE1fico de tipo ${t}`}}}changeChartType(t){let o=t.target.value;this.chartOptions.forEach(i=>{i.chart.type=o})}static \u0275fac=function(e){return new(e||l)};static \u0275cmp=m({type:l,selectors:[["app-chart-example2"]],standalone:!0,features:[u],decls:23,vars:1,consts:[[2,"max-width","600px","margin","auto"],[3,"change"],["value","line"],["value","bar"],["value","column"],["value","area"],["value","candlestick"],["value","boxPlot"],["value","heatmap"],["value","treemap"],["value","radialBar"],["value","polarArea"],[4,"ngFor","ngForOf"],[3,"series","chart","title"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"select",1),d("change",function(y){return o.changeChartType(y)}),a(2,"option",2),r(3,"L\xEDnea"),n(),a(4,"option",3),r(5,"Barra"),n(),a(6,"option",4),r(7,"Columna"),n(),a(8,"option",5),r(9,"\xC1rea"),n(),a(10,"option",6),r(11,"Candlestick"),n(),a(12,"option",7),r(13,"BoxPlot"),n(),a(14,"option",8),r(15,"Mapa de Calor"),n(),a(16,"option",9),r(17,"Treemap"),n(),a(18,"option",10),r(19,"Radial Bar"),n(),a(20,"option",11),r(21,"Polar Area"),n()(),c(22,g,2,3,"div",12),n()),e&2&&(s(22),p("ngForOf",o.chartOptions))},dependencies:[f,C,x]})};export{v as ChartExample2Component};
