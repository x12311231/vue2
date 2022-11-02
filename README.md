```
#20221101
##ref属性
1，被用来给元素或子组建注册引用信息（dom id的替代）
2,应用在html标签上获取的是真实dom元素，应用在组建标签上获取的是实例对象（vc）
3,使用方式：
  打标识：<h1 ref="xxx"> ... </h1> | <SchoolL ref="xxx"> </SchoolL>
  获取：this.$refs.xxx

##输出默认配置信息(配置参考：https://cli.vuejs.org/config/#vue-config-js)
  vue inspect > output.js

##props
  组建数据传递
  1）<Demo name="xxx" />
  2)
  props:['name']
  --------------
  props:{
    name:String
  }
  --------------
  props:{
    name:{
      type:String
      ,required:true
      ,default:'defalut'
    }
  }

  备注：props是只读的，如果进行修改，vue会发出警告，
  若需传递值，后期又有修改需求，data里新建一个属性，把传递的值赋值到该属性
   data() {
      return {
          ,sname: this.name // props属性不可直接修改
      }
  },
  methods: {
    ,updateProps() {
      this.sname = '北京大学'
    }
  }
  ,props: {
    ,name: {
      type:String,
      required:true
    }
  }

##mixin
  功能：可以把多个组件公用的配置提取成一个混入对象
  使用方式：
    第一步定义混合
    {
      data() {...}
      methods:{...}
      ...
    }
    第二步使用混合
    * 全局混入：Vue.mixin(xxx)
    * 局部混入：{mixin:[xxx]}
```