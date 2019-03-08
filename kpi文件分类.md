[toc]
## kpi
#### redux
- aiReportReducer.js  智能机器人看板请求
- attentionReducer.js  获取关注列表及增删改,获取报表库的tabs
- customerReportReducer  获取协同/周月看板数据
- filterReducer    多维度筛选、右上角时间筛选等
- kpiListReducer   kpi板块主要数据请求
- loadReportData   滚动加载,将符合条件的项传递给加载组件
- monitorListReducer  监控处理
- orderBoardDataReducer  工单其他请求
- orderMonitorReducer  工单监控看板请求
- requestMonitorsData  在线客服看板请求
- selectColumnsReducer 周月报/协同看板里的筛选列

#### style
- kpi.less         kpi主要样式
- kpiTopRight.less  右上角时间选择样式
- monitor.less      监控样式
- numberCar.less    看板上部小卡片样式
- orderMonitor.less  工单监控看板
- performance.less   在线客服看板公共样式
- reportLibrary.less  报表库样式

#### utils
- 大多是charts图表，根据名字可知用途
- 其他的有些一共用数据处理方法

#### view
##### aiReport 智能机器人
- AiReport   类似在线客服看板，区别
- AiReportDetail 详情
- AiTopRight  机器人时间选择
```
和其他时间选择的区别：
* 智能机器人看板时间选择公共组件:
* 1.不可选择时分秒,
* 2.不与其他模块的时间关联,
* 3.选择右侧时间全部格式化为00:00:00到23:59:59;
```
- LoadAiReportData 滚动加载组件
```
区别：
1.初始时间区别
2.参数区别
3.接口区别
```
##### common   公共组件
- Background  暂时没用，以后也许有用
- KpiTopRight 时间选择公共组件
- LoadReportData 滚动加载公共组件
- NumberCar 在线看板顶部公共小卡片组件
- NumberCarItem 同上
- SelectData  选择显示列公共组件
- ShowScreen  筛选公共组件
```
1.里面的客服，用户群等，后端为了方便开发给了多个别名，最好让他们统一
2.选择一个维度退出，再在外面选择时间，会把时间同步到内部：
为了兼容报表库存老版参数处理，等报表库接口后期更新再处理，不再让时间在筛选里出现
```
##### myReport 我的报表/监控
- gridDataMonitor 监控数据统一处理  平台和商铺接口切换也写在里面
- LoadMonitorData 监控首页加载组件，暂时没处理滚动加载，后期卡片数量增加再处理，默认全部依次加载
- MonContainer 监控最外层容器
- MonDetail 监控详情容器（第二页）
- MonIntervalTime  读秒组件
- MonLeftTable  详情左表格
- MonPandectCard 首页小卡片组件
- MonRightTables 详情右表格 里面有多个表格根据选择展示，

##### orderReport 工单看板
- OrderDayWeekMonth 日周月看板单页
- OrderDayWeekMonthTaps 日周月看板tabs
- OrderMonitor 监控看板
- OrderMonitorTable 监控看板下面的表格 默认加载
- OrderPandect 工单总览
- OrderPerformance 工单绩效
- OrderTopRight 日周月报时间定制
```
与其他时间选择不同：
* 工单看板的日/周/月报看板右上角时间选择:
* 1.每个tap独立不关联,每次切换默认分别为近7天,近7周,近三月
* 2.不与其他模块的时间关联,
* 3.时间选项也与其他模块有差异
```
##### reportLibrary 报表库
>接口和样式都是老的，很多问题不便更改，等产品重构
- ChartDetails 上部分图
- CommonReport tab中间容器
- KpiReportDetails  报表库
##### serviceReport 在线客服看板
- ChartItems 上部分图
- CustomerService 协同看板
- LoadReportDataRefactor 滚动加载组件
- PerformanceKanban  看板：
```
1.这个组件很多地方公用
2.添加了工作时长详情，导出
```
- ReportDetails  详情页
- ShowKpiData 看板单个展示组件
- WeeklyMonthly 周月报看板，业务多逻辑较繁琐，
```
1.分bbc和正常 分客服维度和时间维度 列选择/时间/筛选都要跟着联动
2.时间维度不能大于当前时间选择的最大值，如时间选择1天，禁月/七天选项，重置时间都变成最小的半小时
3.参数里的p.siteid是后端当时图方便的别名，待后期改成统一或不变
```


