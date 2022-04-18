---
title: 面试
date: 2022-04-18 15:16:00
sidebar: "auto"
categories:
  - JavaScript
tags: 
  - JavaScript
  - ES6
  - Vue
---

## HTML

### HTML

在index.html中运行校验浏览器版本的代码，vue项目不支持浏览器提示

### CSS兼容性

厂商前缀：谷歌-webkit-、火狐-moz-、IE-ms-、欧朋-o-

### 提高页面性能

2.1、图片压缩、合并（精灵图）、使用字体图标代替小图片、使用base64、图片懒加载
2.2、css、js的压缩、封装复用
2.3、减少重排操作，例如使用transform书写动画效果，在for循环结束后再去操作dom等
2.3、使用CDN网络托管
2.4、数据懒加载、数据按需加载（上拉加载）、分页
2.5、路由懒加载
2.6、利用缓存来缓存文件
2.7、频繁触发的事件进行防抖和节流
2.8、异步加载
2.9、减少闭包，递归优化，使用高效的算法
2.10、webpack优化：去除无用代码treeShaking、组件按需加载、使用chunck、模板预编译等
2.11、字库用gb2312不要utf-8，一个汉字少一个字节

### 谈谈你对H5的理解

Html5是Web中核心语言HTML的规范，是 HyperText Markup Language 5 的缩写，H5提供新的标签
元素，使代码变的更有语义；提供了大量api，如本地存储、离线存储、webworker、websocket、
filereader、地理定位、拖拽等；提供了更加酷炫的CSS3新特性，如过渡、变形、动画、阴影、渐变
等。

### 浏览器从输入网址都看到网页都发生了什么？

4.1、域名解析成ip地址
4.2、客户端发送一个带有SYN标志的数据包给服务端（三次握手，第一次）
4.3、服务端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息（三次握手，第二次）
4.4、客户端再回传一个带ACK标志的数据包，代表握手结束，连接成功（三次握手，第三次）
4.5、服务端处理数据并返回数据
4.6、客户端请求关闭连接（四次挥手，第一次）
4.7、服务端确认是否还有数据要传输（四次挥手，第二次）
4.8、服务端没有要传输的数据了，准备关闭连接（四次挥手，第三次）
4.9、客户端断开连接（四次挥手，第四次）
4.10、浏览器解析HTML，生成DOM树，解析CSS，生成CSS规则树
4.11、DOM树和CSS规则树合并成渲染树，开始渲染
4.12、执行JavaScript脚本

### 重绘和重排

重排也叫回流，当元素因为规模尺寸，布局，隐藏等改变而需要重新构建时则成为重排。
重绘：一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局则叫重绘。
重绘不一定重排，但是重排一定重绘。

### 缓存 🎈

强制缓存：请求头设置cache-contro，缓存没有过期，渲染页面
  max-age缓存的时间
  no-cache：不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之
  前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。
  no-store：直接禁止浏览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都
  会下载完整的资源。
  public：可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。
  private：只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存。

协商缓存：请求头设置last-modified/etag

  If-Modified-Since、If-None-Match 判断是否可以使用本地缓存

  1.Etag要优于Last-Modified。Last-Modified的时间单位是秒，如果某个文件在1秒内改变了多次，那么
  他们的Last-Modified其实并没有体现出来修改，但是Etag每次都会改变确保了精度；
  2.在性能上，Etag要逊于Last-Modified，毕竟Last-Modified只需要记录时间，而Etag需要服务器通过算
  法来计算出一个hash值；
  3.在优先级上，服务器校验优先考虑Etag。

### H5缓存

  本地存储：localStorage永久存储、sessionStorage临时存储
  离线缓存：在html标签上设置 manifest 属性 引入cache文件（CACHE缓存文件，NETWORK不缓存文
  件，FALLBACK当资源不可访问时，代替的文件）

### 更新缓存文件

  1、更新manifest文件；2、通过javascript操作：window.applicationCache.update()；3、清除浏览器缓存；4、带版本号，根据版本号判断。

### 状态码

  1字头：信息，服务器收到请求，需要请求者继续执行操作
  2字头：成功，操作被成功接收并处理
  3字头：重定向，需要进一步的操作以完成请求
  4字头：客户端错误，请求包含语法错误或无法完成请求
  5字头：服务器错误，服务器在处理请求的过程中发生了错误
  101：切换协议。
  200：请求成功。一般用于GET与POST请求
  203：非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本
  204：无内容。服务器成功处理，但未返回内容。
  301：永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到
  新URI。
  302：临时移动。
  304：未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。
  305：使用代理。所请求的资源必须通过代理访问
  307：临时重定向。
  400：客户端请求的语法错误，服务器无法理解
  404：服务器无法根据客户端的请求找到资源（网页）
  405：客户端请求中的方法被禁止
  500：服务器内部错误，无法完成请求
  502：作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
  503：由于超载或系统维护，服务器暂时的无法处理客户端的请求。
  505：服务器不支持请求的HTTP协议的版本，无法完成处理

### POST和GET区别

GET在浏览器回退时是无害的，而POST会再次提交请求。

GET产生的URL地址可以被Bookmark(收藏为书签)，而POST不可以。

GET请求会被浏览器主动cache(能被缓存)，而POST不会，除非手动设置。

GET请求只能进行url编码application/x-www-form-urlencoded，
而POST支持多种编码方式application/x-www-form-urlencoded or multipart/form-data。二进制多重编码

GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。

GET请求在URL中传送的参数是有长度限制的，而POST没有。

对参数的数据类型，GET只接受ASCII字符，而POST没有限制。

GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。

GET参数通过URL传递，POST放在Request body中

### PATCH和PUT

PATCH一般是用来局部更新资源的，假设我们有一个UserInfo，里面有userId， userName， userGender等10个字段，只传一个userName到指定资源去，表示该请求是一个局部更新，后端仅更新接收到的字段。

PUT虽然也是更新资源，但要求前端提供的一定是一个完整的资源对象，理论上说，如果你用了PUT，但却没有提供完整的UserInfo，那么缺了的那些字段应该被清空.另外PUT会有一个create操作,加入更新的id不存在,会进行创建,而PATCH则没有这个.

### !DOCTYPE html 是干什么的，有什么用

  1、声明文档类型是html5类型的文档。2、声明了则是标准模式，兼容ie高版本；不声明则是混杂模式，兼容ie低版本。

### http1.0 、http1.1和http2.0的区别

  1、长链接
  HTTP 1.0需要使用keep-alive参数来告知服务器端要建立一个长连接，而HTTP1.1默认支持长连接。
  HTTP是基于TCP/IP协议的，创建一个TCP连接是需要经过三次握手的,有一定的开销，如果每次通讯都要
  重新建立连接的话，对性能有影响。因此最好能维持一个长连接，可以用个长连接来发多个请求。

  2、节约带宽
  HTTP 1.1支持只发送header信息(不带任何body信息)，如果服务器认为客户端有权限请求服务器，则返
  回100，否则返回401。客户端如果接受到100，才开始把请求body发送到服务器。
  这样当服务器返回401的时候，客户端就可以不用发送请求body了，节约了带宽。

  3、HOST域
  HTTP1.0没有host域，HTTP1.1有host域。HOST域就是，web server上的多个虚拟站点可以共享同一个
  ip和端口

  4、多路复用
  HTTP2.0使用了多路复用的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比HTTP1.1
  大了好几个数量级

  5、数据压缩
  HTTP1.1不支持header数据的压缩，HTTP2.0使用HPACK算法对header的数据进行压缩，这样数据体积
  小了，在网络上传输就会更快。

  6、服务器推送
  当我们对支持HTTP2.0的web server请求数据的时候，服务器会顺便把一些客户端需要的资源一起推送
  到客户端，免得客户端再次创建连接发送请求到服务器端获取。这种方式非常合适加载静态资源。服务
  器端推送的这些资源其实存在客户端的本地，客户端直接从本地加载这些资源就可以了，不用走网络，
  速度自然是快很多的。

### http和https的区别

  1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。
  2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
  3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。 4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证
  的网络协议，比http协议安全。
  虽然说HTTPS有很大的优势，但其相对来说，还是存在不足之处的：
  　　（1）HTTPS协议握手阶段比较费时，会使页面的加载时间延长近50%，增加10%到20%的耗电；
  　　（2）HTTPS连接缓存不如HTTP高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受
  到影响；
  　　（3）SSL证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用。
  （4）SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗。
  　　（5）HTTPS协议的加密范围也比较有限，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不
  到什么作用。最关键的，SSL证书的信用链体系并不安全，特别是在某些国家可以控制CA根证书的情况
  下，中间人攻击一样可行。

### TCP和UDP的区别

  （1）TCP是面向连接的，udp是无连接的即发送数据前不需要先建立链接。
  （2）TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到
  达;UDP尽最大努力交付，即不保证可靠交付。并且因为tcp可靠，面向连接，不会丢失数据因此适合大
  数据量的交换。
  （3）TCP是面向字节流，UDP面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，
  对实时的应用比如IP电话和视频会议等）。
  （4）TCP只能是1对1的，UDP支持1对1,1对多。
  （5）TCP的首部较大为20字节，而UDP只有8字节。
  （6）TCP是面向连接的可靠性传输，而UDP是不可靠的。

### websocket和http

websocket是HTML5中的协议，支持持久连接；而Http协议不支持持久连接。

websocket连接建立之后，通信双方都可以在任何时刻向另一方发送数据

双向通信协议，是建立在TCP之上，节省了很多TCP连接建立和断开的消耗，还节约了带宽，后续数据都以帧序列的形式传输

1、浏览器、服务器建立TCP连接，三次握手。这是通信的基础，传输控制层，若失败后续都不执行。
2、TCP连接成功后，浏览器通过HTTP协议向服务器传送WebSocket支持的版本号等信息。（开始前的HTTP握手）服务器收到客户端的握手请求后，同样采用HTTP协议回馈数据。
3、连接成功后，双方通过TCP通道进行数据传输，不需要HTTP协议。

### localStorge实现响应式

#### Vuex 实现状态持久化
```javascript
  mutaions: {
    markVideoPlayed(state) {
      state.isplayed = true

      window.localStorge.isplayed = JSON.stringify(true)
    },
    setPlayStatus(state, status) {
      state.isplayed = status
    }
  }

  actions: {
    loadVideoStatus({ commit }) {
      let viodeStatus = JSON.parse(window.localStorge.isPlayed)
      commit('setPlayStatus', videoStastus)
    }
  }
```
### localStorge可以跨域吗

浏览器相同tab下的localStorge是否可以共享，Cookie

localStorage和 sessionStorage的主要区别是：localStorage的生命周期是永久的，意思就是如果不主动清除，存储的数据将一直被保存。而sessionStorage顾名思义是针对一个session的数据存储，生命周期为当前窗口，一旦窗口关闭，那么存储的数据将被清空。

```javascript
#localStorage和sessionStorage的一些方法：
#添加键值对： setItem(key,value);
#获取键值对： getItem(key);
#删除键值对： removeItem(key);
#清除所有键值对： clear();
#获取属性名称（键名称）： key(index);
#获取键值对的数量： length;

#localStorage 的存取方式
localStorage.age = 88; // 用localStorage属性的方式来添加条目
localStorage.setItem("animal","cat"); // 推荐使用setItem的方式存储一个名为animal，值为cat的数据
var animal = localStorage.getItem("animal"); //读取本地存储中名为animal的数据，并赋值给变量animal
console.log(animal);  
localStorage.removeItem("animal"); //删除单条数据
localStorage.clear(); //清除所有数据

#sessionStorage 的存取方式
sessionStorage.work = "police";
sessionStorage.setItem("person", "Li Lei");
var person = sessionStorage.getItem("person");
console.log(person);
```

跨域目前广泛采用的是postMessage和iframe相结合的方法。postMessage(data,origin)方法允许来自不同源的脚本采用异步方式进行通信，可以实现跨文本档、多窗口、跨域消息传递。接受两个参数：

data：要传递的数据，HTML5规范中提到该参数可以是JavaScript的任意基本类型或可复制的对象，然而并不是所有浏览器支持任意类型的参数，部分浏览器只能处理字符串参数，所以在传递参数时需要使用JSON.stringify()方法对对象参数序列化。

origin：字符串参数，指明目标窗口的源，协议+主机+端口号[+URL]，URL会被忽略，所以可以不写，只是为了安全考虑，postMessage()方法只会将message传递给指定窗口，当然也可以将参数设置为"*"，这样可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。

window.frames[0].postMessage('jogging, reading and writing','http://www.test2.com');



### 跨页面通信


## CSS

### CSS 优先级和权重值如何计算

内嵌样式>内部样式>外部样式>导入式
！important > 内嵌 1000 >Id 100 > class=[]=伪类 10 > tag=伪元素 1 > ( * + > ~) 0

### 如何触发BFC，以及BFC的作用

BFC：块级格式化上下文block formatting context，是一个独立渲染区域。规定了内部box如何布局，
并且与这个区域外部毫不相干。
触发：float的值不是none；position的值不是static或者relative；display的值是inline-block、block、
table-cell、flex、table-caption或者inline-flex；overflow的值不是visible。
作用：避免margin重叠；自适应两栏布局；清除浮动。

### CSS盒模型

盒模型由：外边距margin、边框border、内边距padding、内容content四个部分组成
标准盒模型大小=border+padding+content
怪异盒模型大小=content
转怪异盒模型：box-sizing:border-box;
转标准盒模型：box-sizing:content-box;

### 如何水平垂直居中一个元素

方法1、绝对定位 margin:auto
方法2、绝对定位 -margin
方法3、决定定位 transform
方法4、flex

方法1：绝对定位+margin:auto
```css
div{
    width: 200px;
    height: 200px;
    background: green;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
```

方法2：绝对定位+负margin
```css
div{
    width: 200px;
    height: 200px;
    background:green;
    
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-100px;
    margin-top:-100px;
}
```
方法3：绝对定位+transform
```css
div{
    width: 200px;
    height: 200px;
    background: green;
    
    position:absolute;
    left:50%;    /* 定位父级的50% */
    top:50%;
    transform: translate(-50%,-50%); /*自己的50% */
}
```
方法4：flex布局
```css
.box{
      height:600px;  
      
      display:flex;
      justify-content:center;  //子元素水平居中
      align-items:center;      //子元素垂直居中
        /* aa只要三句话就可以实现不定宽高水平垂直居中。 */
}
.box>div{
    background: green;
    width: 200px;
    height: 200px;
}
```

### css实现一个三角形

```css
.triangle{ 
  width: 0; 
  height: 0; 
  border: 100px solid transparent; 
  border-left-color: red; }
```

### 如何实现左边固定宽，右边自适应布局


#### 第一种方式
左边的div向左浮动，右边的div的width为100%，margin-left值设置为左边div的宽度。

```css
.wrap {
  width: 100%;
  height: 100%;
  background: #fefefe;
}
.left {
  float: left;
  width: 300px;
  height: 100%;
  background: #eafeea;
}
.right {
  width: 100%;
  height: 100%;
  margin-left: 300px;
  background: pink;
}
```


#### 第二种方式
和第一种方式的思路一样，只是这次我们可以通过将父元素设置为 position: relative； 将左边的元素设置为 position: absolute； 并且left为0。右边div不变。

```css
.wrap {
  width: 100%;
  height: 100%;
  background: #fefefe;
  position: relative;
}
.left {
  width: 300px;
  position: absolute;
  left: 0;
  height: 100%;
  background: #eafeea;
}
.right {
  width: 100%;
  height: 100%;
  margin-left: 300px;
  background: pink;
}
```

#### 第三种方式
使用BFC方式，即将右边的div设置overflow: hidden；这样就可以触发
BFC了，而BFC的规则就是不会和浮动元素重叠，如下
```css
.wrap {
  width: 100%;
  height: 100%;
  background: #fefefe;
}
.left {
  float: left;
  width: 300px;
  height: 100%;
  background: #eafeea;
}
.right {
  height: 100%;
  overflow: hidden;
  background: pink;
}
```

#### 第四种方式
左边固定宽度 float，右边width设置为100%， float: right，然后margin-right: -300px即可，通过margin负边距，我们就可以达到同样的效果：
```css
.wrap {
  width: 100%;
  height: 100%;
  background: #fefefe;
}
.left {
  float: left;
  width: 300px;
  height: 100%;
  background: #eafeea;
}
.right {
  width: 100%;
  float: right;
  margin-right: -300px;
  height: 100%;
  background: pink;
}
```

####  第五种方式 
使用flex布局。 包裹层使用flex，内部就是弹性布局了，不用设置。

```css
.wrap {
  display: flex;
  width: 100%;
  height: 100%;
  background: #fefefe;
}
.left {
  width: 300px;
  height: 100%;
  background: #eafeea;
}
.right {
  width: 100%;
  height: 100%;
  background: pink;
}
```

#### 第六种方式 左右两边全部使用绝对定位，左边设定宽度300px，右边100%。
```css
.wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fefefe;
}
.left {
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: #eafeea;
}
.right {
  position: absolute;
  top: 0;
  left: 300px;
  width: 100%;
  height: 100%;
  background: pink;
}
```


#### 第七种方式
使用table布局。 包裹元素设置为 display: table； 子元素设置为 display: table-cell; 然后再设置好左边元素的宽度，右边元素不需要设置宽度。 并且是等高布局。
```css
.wrap {
  display: table;
  width: 100%;
  height: 100%;
  background: #fefefe;
}
.left {
  display: table-cell;
  width: 300px;
  height: 100%;
  background: #eafeea;
}
.right {
  display: table-cell;
  height: 100%;
  background: pink;
}
```


#### 第八种方式
grid布局
```css
..wrap {
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows:100px;
  /* grid-template-columns: 200px 1fr; 这个也可以*/}
.left {}
.right {
  word-break: break-all;
  overflow: hidden;
}
```

### css可继承的属性有哪些

可继承的属性：文本类：text-indent、text-align、line-height、word-spacing、letter-spacing、text-transform、direction、color；

字体类：font、font-family、font-weight、font-size、font-style、font-variant、font-stretch、font-size-adjust；

其它类：visibility、caption-side、border-collapse、border-spacing、empty-cells、table-layout、list-style-type、list-style-image、list-style-position、list-style、quotes、cursor、page、page-break-inside、windows、orphans等

### px、em、rem、vh、vw分别是什么

px物理像素，绝对单位；em相对于自身字体大小，如果自身没有大小则相对于父级字体大小，如果父
级也没有则一层一层向上查找，直到找到html为止，相对单位；rem相对于html的字体大小，相对单
位；vh相对于屏幕高度的大小，相对单位；vw相对于屏幕宽度的大小，相对单位

## JS

### new操作符都做了哪些事情
创建实例对象
- 首先创建一个新的空对象
- 然后将空对象的 `__proto__` 指向构造函数的原型

  - 它将新生成的对象的 `__proto__` 属性赋值为构造函数的 prototype 属性，使得通过构造函数创建的所有对象可以共享相同的原型。
  - 这意味着同一个构造函数创建的所有对象都继承自一个相同的对象，因此它们都是同一个类的对象。
- 改变 this 的指向，指向空对象
- 对构造函数的返回值做判断，然后返回对应的值

  - 一般是返回第一步创建的空对象；
  - 但是当 构造函数有返回值时 则需要做判断再返回对应的值，是 对象类型则返回该对象，是 原始类型则返回第一步创建的空对象。

### class constructor的作用

### class调用super有什么用

### class constructor中声明方法，此方法挂载到class实例还是原型上，在class内声明呢?

### call、apply、bind的区别
这三个都是用来定义上下文的，改变this指向，call、apply会指定上下文并执行函数；而bind终身定 死上下文但是不执
行函数，并返回新的函数。 其中call和apply传入参数的形式有别，call是单独罗列，逗号隔开参数；
apply是数 组。 函数.call(上下文对象，参数，参数，参数); 函数.apply(上下文对象，[参数，参数，参
数]);
```javascript
var obj = { a: 10 }
function fun(b, c){
  console.log(this.a + b + c);
}
fun.call(obj, 3, 4);
fun.apply(obj, [3, 4]);
fun = fun.bind(obj); // 返回新的函数 
fun(3,4);
```

### 数据类型有哪些

基本类型：数字number、字符串string、布尔boolean、undefined、null、symbol、BigInt

BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。这原本是 Javascript中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。

引用类型：数组array、函数function、对象object

### 闭包

可以把闭包简单理解成"定义在一个函数内部的函数"。
它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
还有一个变量的作用域，在函数外部自然无法读取函数内的局部变量。

```javascript
function f1(){
  var n=999;
  function f2(){
    alert(n); // 999
  }
}
```

### JS 判断是否为对象或数组
#### 判断值是否是对象
```javascript
// toString 方式
Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
// 这里使用了 null 传导符(?.) 以防止出错
val?.constructor === Object // true 代表为对象
// typeof 与 instanceof 并不能完全判断一个值为对象,"object"——如果这个值是对象（包括数组）或null；
[] instanceof Object // true
new Object instanceof Object // true
// __proto__ 方式
val.__proto__ === Object.prototype // true 代表为对象
// Object.getPrototypeOf 方式
Object.getPrototypeOf(val) === Object.prototype // true 代表为对象
```

#### 判断值是否是数组
```javascript
// toString 方式
Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
// Array.isArray
Array.isArray(val) // true 代表为数组
// instanceof 方式
val instanceof Array // true 代表为数组
// constructor 方式
val?.constructor === Array // true 代表为数组
//  __proto__ 方式
val.__proto__ === Array.prototype // true 代表为数组
// Object.getPrototypeOf 方式
Object.getPrototypeOf(val) === Array.prototype // true 代表为数组
// isPrototypeOf 方式
Array.prototype.isPrototypeOf(val) // true 代表为数组
```

### for in 与 for of
for...in加强循环，不光可以遍历数组，还可以遍历对象和其原型上的方法
for...of遍历数组和可枚举的对象

### 原型和原型链

原型：每一个实例对象类型都有一个隐式原型__ proto __ ，每一个构造函数都有一个显示原型prototype，该属
性指向它的原型对象。

原型链：某个对象的原型又有自己的原型，直到某个对象的原型为null为止，组成这条的最后一环，这
种一级一级的链就是原型链。

### 事件循环

先同步再异步，异步中先微任务，在宏任务。

同步任务进入主线程，异步任务进入Event Table并注册函数 当指定的事情完成时，Event Table会将这
个函数移入Event Queue。主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。上述过程会不断重复，也就是常说的Event Loop(事件循环)。

同步任务进入主线程，主线程从"任务队列"中读取执行事件，这个过程是循环不断的，这个机制被称为事件循环。此机制具体如下:主线程会不断从任务队列中按顺序取任务执行，每执行完一个任务都会检查microtask队列是否为空（执行完一个任务的具体标志是函数执行栈为空），如果不为空则会一次性执行完所有microtask。然后再进入下一个循环去任务队列中取下一个任务执行。

macro-task(宏任务，是由宿主发起的)：setTimeout，setInterval
micro-task(微任务，由JavaScript自身发起)：Promise.then/catch，process.nextTick

### 事件流和事件委托

事件流一般分三个阶段：1、捕获阶段（由外向内） 2、目标阶段 （执行阶段） 3、冒泡阶段（由内向
外）

阻止事件冒泡e.stopPropagation() 阻止默认动作e.preventDefault()

事件委托：就是把事件委托给父级，利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的
所有事件。
```javascript
target.nodeName.toLowerCase() == 'li'
```
### 跨域
同源协议是指"协议+域名+端口"三者相同

方法1：跨域资源共享CORS跨域，就是服务端在HTTP返回头上加上“AccessControll-Allow-Origin：
*”。 “Access-Controll-Allow-METHODS：GET, POST” DELETE、PATCH请求类型会发出OPTIONS预检
请求。

方法2：代理跨域，webpack-dev-server里面的proxy配置项。config中的 ProxyTable

方法3：JSONP，利用页面srcipt没有跨域限制的漏洞，用script的src引入它，然后页 面内定义回调函
数，jQuery中$.ajax({dataType: ‘jsonp’})。

方法4： iframe跨域，配合window.name或者 location.hash或者document.domain 一起使用

方法5：nginx反向代理接口跨域，通过nginx配置一个代理服务器（域名与domain1 相同，端口不同）
做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中 domain信息，方便当前域cookie
写入，实现跨域登录。
方法6：jquery的ajax跨域，dataType:'jsonp

### promise实例数组中所有元素执行一遍

### promise一直执行

### ajax实现原理

### 图片懒加载

方案一: 位置计算 + 滚动事件 (Scroll) + DataSet API
clientTop，offsetTop，clientHeight 以及 scrollTop 各种关于图片的高度作比对
监听 window.scroll 事件
```html
<img data-src="shanyue.jpg" />
```

方案二: getBoundingClientRect API + Scroll with Throttle + DataSet API

window.scroll 监听 Element.getBoundingClientRect() 并使用 _.throttle 节流

方案三: IntersectionObserver API + DataSet API
其中，entry.isIntersecting 代表目标元素可见
```javascript
const observer = new IntersectionObserver((changes) => {
  // changes: 目标元素集合
  changes.forEach((change) => {
    // intersectionRatio
    if (change.isIntersecting) {
      const img = change.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

observer.observe(img);
```
当然，IntersectionObserver 除了给图片做懒加载外，还可以对单页应用资源做预加载。

方案四: LazyLoading 属性
```html
<img src="shanyue.jpg" loading="lazy" />
```
首先设置一个临时 Data 属性 data-src，控制加载时使用 src 代替 data-src，可利用 DataSet API 实现
### XSS攻击和CSRF攻击
XSS：跨站脚本攻击Cross site script，因叫css容易让人误会所以改成了xss。比如一个JSON数据：
在不该出现script代码的地方出现了，引发一些潜在的危险。 XSS漏洞，能让人们在网页里面插入一段有
功能的语句。 XSS 全称“跨站脚本”，是注入攻击的一种。其特点是不对服务器端造成任何伤害， 而是通
过一些正常的站内交互途径，例如发布评论，提交含有 JavaScript 的内容文本。这时服务器端如果没有
过滤或转义掉这些脚本，作为内容发布到了页面上，其他用户访问这个 页面的时候就会运行这些脚本。
防范： ① 用正则表达式阻止用户提交带有<、eval、script等危险字眼的语句 ② 显示的时候不要直接用
innerHTML，而是用innerText，或者将<转义。
```json
var obj = [ { id: 1, name: "<script>alert('哈哈哈')</script>", age: 12, } ];
```
CSRF 的全称是“跨站请求伪造”，而 XSS 的全称是“跨站脚本”。看起来有点相 似，它们都是属于跨站攻击
——不攻击服务器端而攻击正常访问网站的用户，但前面说 了，它们的攻击类型是不同维度上的分类。
CSRF 顾名思义，是伪造请求，冒充用户在站内 的正常操作。我们知道，绝大多数网站是通过 cookie 等
方式辨识用户身份(包括使用服务 器端 Session 的网站，因为 Session ID 也是大多保存在 cookie 里面
的)，再予以授权的。 所以要伪造用户的正常操作，最好的方法是通过 XSS 或链接欺骗等途径，让用户
在本机(即 拥有身份 cookie 的浏览器端)发起用户所不知道的请求。 就是说，如果用户不老老实实写姓
名，写了一个个叫做XSS。如果进一步的，写了一个$.post()发了document.cookie就是CSRF了。解决方
法： ① 用token验证，验证用户的IP地址生成MD5码，更安全的验证方法 ② 防住XSS。

### symbol的理解

ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名

```javascript
let sy = Symbol("KK") // Symbol(KK) typeof(sy); 
console.log(sy); // "symbol" 

// 相同参数 Symbol() 返回的值不相等 
let sy1 = Symbol("kk"); 
sy === sy1; // false 

// 写法1 
let syObject = {}; 
syObject[sy] = "kk";
console.log(syObject); // {Symbol(key1): "kk"}

// 写法2
let syObject = {
  [sy]: "kk"
}
console.log(syObject); // {Symbol(key1): "kk"}

// 写法3
let syObject = {};
Object.defineProperty(syObject, sy, {value: "kk"});
console.log(syObject); // {Symbol(key1): "kk"}
```

Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。但是不会出现在
for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。如果
要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys()
取到。

```javascript
for (let i in syObject) { console.log(i); }
Object.keys(syObject); // [] 
Object.getOwnPropertySymbols(syObject); // [Symbol(key1)] 
Reflect.ownKeys(syObject); // [Symbol(key1)]
```


### AMD、CMD、ES6、CommonJS的区别

CommonJs和AMD，前者是针对服务端的js，也就是nodejs，后者是针对浏览器的。

1、两者的模块导入导出语法不同：commonjs是module.exports，exports导出，require导入；ES6则是export导出，import导入。

2、commonjs是运行时加载模块，ES6是在静态编译期间就确定模块的依赖。

3、ES6在编译期间会将所有import提升到顶部，commonjs不会提升require。

4、commonjs导出的是一个值拷贝，会对加载结果进行缓存，一旦内部再修改这个值，则不会同步到外部。ES6是导出的一个引用，内部修改可以同步到外部。

5、两者的循环导入的实现原理不同，commonjs是当模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。ES6 模块是动态引用，如果使用import从一个模块加载变量（即import foo from 'foo'），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。

6、commonjs中顶层的this指向这个模块本身，而ES6中顶层this指向undefined。

7、CommonJs 是单个值导出，ES6 Module可以导出多个

8、然后就是commonjs中的一些顶层变量在ES6中不再存在：

arguments
require
module
exports
__filename


CommonJS：模块引用(require) 模块输出(exports) 模块标识(module) ES6：模块引用(import) 模块输
出(export) 前者支持动态导入，也就是 require(${path}/xx.js)，后者目前不支持。 前者是同步导入，因
为用于服务端，文件都在本地，同步导入即使卡住主线 程影响也不大。而后者是异步导入，因为用于浏
览器，需要下载文件，如果也采用同 步导入会对渲染有很大影响。 前者在导出时都是值拷贝，就算导出
的值变了，导入的值也不会改变，所以 如果想更新值，必须重新导入一次。但是后者采用实时绑定的方
式，导入导出的值都 指向同一个内存地址，所以导入值会跟随导出值变化 AMD、CMD都使用define定
义模块，require引入模块，区别在于AMD是前置依赖， CMD是就近依赖



```javascript

// AMD 依赖必须一开始就声明 
define(["./a", "./b"], function (require, factory) { // do something... }); 
// CMD 
define(function(require, factory) { var a = require('./a'); // 依赖就近书写 // do something... });

```

## 手写编程题

## Vue

### element-UI 实现原理

### 如何封装一个组件

### 项目优化