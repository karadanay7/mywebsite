---
authorname: Aysegul Karadan

title: "Input Handling in Blazor Apps"
img: /img/blazor-input/1.png
date: 11/07/2024
description: "Curious about different ways to handle input fields in Blazor apps? Here’s a look at various usage scenarios and reasons for each! "
head:
  meta:
    - name: "keywords"
      content: "Blazor, input handling, @bind directive, @oninput directive, @onchange directive, Blazor tutorials, Blazor forms, real-time synchronization, immediate feedback, Blazor data binding, Blazor events, frontend development, .NET 8, web development, Aysegul Karadan"

    - name: "author"
      content: "Aysegul Karadan"
sitemap:
  loc: /blog/input-handling-in-blazor-apps
---

# Input Handling in Blazor Apps: @bind vs @oninput vs @onchange Usage




<p>
Blazor provides various ways to handle input fields, making it a powerful framework for building interactive web applications. In this post, we'll delve into three key directives for handling inputs: @bind, @oninput, and @onchange. Understanding when and how to use each of these can significantly enhance the responsiveness and functionality of your Blazor applications.</p>

## @bind for Data Binding

The @bind directive is a fundamental feature in Blazor, offering two-way data binding between an input field and a property. This ensures that any change in the input field's value is instantly reflected in the bound property, and vice versa.

### Usage Scenario:


<ol class="list-disc">
 
  <li>Complex Forms: In scenarios where you have complex forms with multiple input fields, @bind provides a seamless way to keep the form data synchronized with your data model. This is particularly useful in form-heavy applications like data entry systems or admin panels.</li>
    <li>Real-Time Updates: When you need real-time synchronization between the UI and the data model, @bind is the go-to choice. It ensures that any user input is immediately reflected in the application state.</li>
</ol>

### Example:


 ```
 <input type="text" @bind="userName" />
<p>Your username is: @userName</p>
 ```

 ## @oninput for Instant Feedback
The @oninput directive triggers an event on every keystroke or value change in the input field. This makes it ideal for scenarios where you need to provide immediate feedback or perform actions based on each character input.

### Usage Scenario:


<ol class="list-disc">
 
  <li>Real-Time Validation: When you want to validate user input as they type, @oninput is perfect. This can enhance user experience by providing instant feedback on whether the input meets certain criteria.
</li>
    <li>Live Search: For implementing live search functionalities, where search results are updated dynamically as the user types, @oninput provides the required immediacy.</li>
</ol>

### Example:


 ```
<input type="text" @oninput="HandleInput" />
<p>Current input: @currentInput</p>

@code {
    private string currentInput;

    private void HandleInput(ChangeEventArgs e)
    {
        currentInput = e.Value.ToString();
    }
}
 ```

 ## @onchange for Final Value Actions
 The @onchange directive triggers an event only when the input field loses focus and the value has been fully changed. This is useful for scenarios where you need to perform an action after the user has finished entering their input.

 ### Usage Scenario:

 <ol class="list-disc">
 
  <li>Form Submission: When the action depends on the final value of the input, such as submitting a form or confirming changes, @onchange is appropriate. It ensures that the action is taken only after the user has completed their input.
</li>
    <li>Batch Updates: If you need to perform operations that should only happen once the user has finalized their input, @onchange provides the necessary control.</li>
</ol>

### Example:


 ```
<input type="text" @onchange="HandleChange" />
<p>Final input: @finalInput</p>

@code {
    private string finalInput;

    private void HandleChange(ChangeEventArgs e)
    {
        finalInput = e.Value.ToString();
    }
}
 ```

 ## Combining @bind and @oninput

 In some cases, you may need the functionality of both @bind and @oninput. For example, in a live search scenario, you might want to keep the input field synchronized with a data model (@bind) while also providing immediate feedback on each keystroke (@oninput).

 ### Example:


 ```
<input type="text" @bind="searchQuery" @oninput="PerformSearch" />
<p>Search results for: @searchQuery</p>

@code {
    private string searchQuery;

    private void PerformSearch(ChangeEventArgs e)
    {
        searchQuery = e.Value.ToString();
        // Perform search logic here
    }
}

 ```

 ## Conclusion

 Choosing the right directive for handling input fields in Blazor depends on the specific needs of your application. Use @bind for real-time synchronization, @oninput for immediate feedback, and @onchange for actions dependent on the final value change. By understanding and leveraging these directives, you can build more responsive and user-friendly Blazor applications.