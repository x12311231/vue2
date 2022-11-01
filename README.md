#20221101
##ref属性
1，被用来给元素或子组建注册引用信息（dom id的替代）
2,应用在html标签上获取的是真实dom元素，应用在组建标签上获取的是实例对象（vc）
3,使用方式：
  打标识：<h1 ref="xxx"> ... </h1> | <SchoolL ref="xxx"> </SchoolL>
  获取：this.$refs.xxx