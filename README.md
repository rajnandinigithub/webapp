1. Implement the Login Page
Design: Follow the design provided for the login page. Ensure all elements (input fields, buttons, etc.) match the design.
Functionality: Implement user authentication. Once the user successfully logs in, redirect them to the /google-login route.
2. Redirect to Onebox Screen
Routing: Ensure that after a successful login, the user is redirected to the /google-login screen.
3. Fetching Data in Onebox Using API Integration
API Endpoints:
List Data: Fetch data using GET /onebox/list
Fetch Single Thread: Fetch a specific thread using GET /onebox/:thread_id
Delete Thread: Delete a thread using DELETE /onebox/:thread_id
4. Implement Keyboard Shortcuts in Onebox
Keyboard Shortcuts:
Pressing “D” should delete the currently selected thread. Use the DELETE /onebox/:thread_id API endpoint.
Pressing “R” should open the Reply box for the currently selected thread.
5. Implement Custom Text Editor
Custom Buttons:
Add a “SAVE” button to the text editor to save drafts or the current state of the text.
Add a “Variables” button to insert predefined variables into the text.
Functionality: Ensure the custom buttons perform their respective actions within the text editor.
Then after I have done,
1. Login Page Implementation

2. Onebox Screen Routing

3. API Integration in Onebox

4. Custom Text Editor Implementation

