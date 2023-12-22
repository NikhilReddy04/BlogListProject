In this project, let's build a **Blog List** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/routing-practice-blog-list-desktop-output.gif" alt="routing-practice-blog-list-desktop-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px), Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/routing-practice-blog-list-sm-output-v2.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/routing-practice-blog-list-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- In the Home Route, user info and blog list should be displayed
- The `Home` component is provided with `blogsList`. It consists of a list of blog details objects with the following properties in each object

  |      Key      | Data Type |
  | :-----------: | :-------: |
  |      id       |  Number   |
  |     title     |  String   |
  |  description  |  String   |
  | publishedDate |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/routing-practice-blog-list-component-breakdown-structure.png" alt="blog list component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Home/index.js`
- `src/components/BlogList/index.js`
- `src/components/BlogList/index.css`
- `src/components/BlogItem/index.js`
- `src/components/BlogItem/index.css`
- `src/components/UserInfo/index.js`
- `src/components/UserInfo/index.css`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` route should consist of `/` in the URL path
- `About` route should consist of `/about` in the URL path
- `Contact` route should consist of `/contact` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js` file

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/profile-img.png](https://assets.ccbp.in/frontend/react-js/profile-img.png) alt should be **profile**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #9aa5b1; width: 150px; padding: 10px; color: white">Hex: #9aa5b1</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #12022f; width: 150px; padding: 10px; color: white">Hex: #12022f</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
