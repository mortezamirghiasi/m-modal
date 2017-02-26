# modaly
a simple javascript modal

usage 
-------------------------------------------------------------------------------------
Required Files
<ul>
<li>modaly.css</li>
<li>modaly.js</li>
</ul>

Html
```html
<a href='/login' class='modaly'>Login</a>
```
Js
```js
modaly.register(document.getElementsByClassName('modaly'));
//or 
modaly.register(document.getElementById('modaly'));
//or 
modaly.register($('.modaly'));
//or 
modaly.urlResponse('/login');
//or 
modaly.htmlString("<h2>Hello!</h2>");
//close 
modaly.close();
```

-------------------------------------------------------------------------------------
