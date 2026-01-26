# DOM_Manupulation.

# Common Attributes of an Element:

1. id – Uniquely identifies an element.
<div id="header"></div>

2. class – Assigns one or more class names (used with CSS/JS).
<p class="container">Hello</p>

3. style – Inline CSS styling.
<h1 style="color: blue;">Heading</h1>

4. title – Tooltip text shown on hover.
<abbr title="HyperText Markup Language">HTML</abbr>

5. name – Identifies form elements.
<input type="text" name="username">

6. src – Source of media (images, video, scripts).
<img src="image.jpg" alt="Sample">

7. href – Hyperlink reference (used in <a>).
<a href="https://example.com">Visit</a>

8. alt – Alternative text for images.
<img src="logo.png" alt="Website Logo">

9. type – Defines the type of input or button.
<input type="password">

10. value – Default value for inputs, buttons, options.
<input type="text" value="Default">

11. placeholder – Hint text in input fields.
<input type="email" placeholder="Enter your email">

12. disabled – Disables an element (button/input).
<button disabled>Submit</button>

13. readonly – Makes input non-editable but still submittable.
<input type="text" value="Read-only" readonly>

14. required – Makes input mandatory in forms.
<input type="text" required>

15. data-* – Custom attributes for storing extra data.
<div data-user-id="101">User</div>

# Attributes :- `id`,`class`,`type`,`style`,`title`,`type`,`sorce`,`href`,`alt`,`type`, `value`,`placeholder`,`disabled`,`readOnly`,`required`,`x(any custom name)`.


# Selecting an Element/Targeting an Element.

1. `document.getElementById(id)` → Selects an element by ID.
2. `document.getElementsByClassName(className)` → Selects elements by class (HTMLCollection).
3. `document.getElementsByTagName(tagName)` → Selects elements by tag (HTMLCollection).
4. `document.querySelector(selector)` → Selects the first matching element (CSS selector).
5. `document.querySelectorAll(selector)` → Selects all matching elements (NodeList).

# Creating and Adding Elements

1. `document.createElement(tagName)` → Creates a new element.
2. `document.createTextNode(text)` → Creates a text node.

3. `element.appendChild(child)` → Appends a child element.
4. `element.append(...nodesOrStrings)` → Appends multiple nodes or text.
5. `element.prepend(...nodesOrStrings)` → Inserts content at the beginning of the element.
6. `element.insertBefore(newNode, referenceNode)` → Inserts before another child.
7. `element.insertAdjacentHTML(position, text)` → Inserts HTML at specific positions (beforebegin, afterbegin, beforeend, afterend).