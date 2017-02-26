# modaly
a simple javascript modal

Required Files
-------------------------------------------------------------------------------------
<ul>
<li>modaly.css</li>
<li>modaly.js</li>
</ul>

usage 
-------------------------------------------------------------------------------------

```html
<a href='/login' class='modaly'>Login</a>
```

<code>modaly.register(document.getElementsByClassName('modaly'));</code><br/>
or  <br/>
<code>modaly.register(document.getElementById('modaly'));</code><br/>
or <br/>
<code>modaly.register($('.modaly'));</code><br/>
or <br/>
<code>modaly.urlResponse('/login');</code><br/>
or <br/>
```html
modaly.htmlString("<h2>Hello!</h2>");
```
close <br/>
<code>modaly.close();</code>

-------------------------------------------------------------------------------------
