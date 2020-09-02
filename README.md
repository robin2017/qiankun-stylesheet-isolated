## qiankun中主应用和子应用的样式隔离
#### 1、为了解决跨域问题，需要eject，然后添加headers

```
    headers :{
      "Access-Control-Allow-Origin": "*",
    }
```
#### 2、为了抛出，需要在子应用配置中添加
```
    output: {
      library:'subApp',
      libraryTarget:'umd',
    }
```


#### 3、必须严格区分三个id
+ 框架应用挂载点
+ 子应用挂载点
+ 子应用在框架应用的挂载点


#### 4、独立集成模式有问题，
+ singlespa的模式没问题