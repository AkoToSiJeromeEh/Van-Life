1. What is a route/url parameter?
a route is a path that whenever we click something on a website it will
direct us on the thing we been click , and a parameter is the way we pass
an information on url

A portion of our route path that is a placeholder for what will eventually
be the actual segment in the URL of the page.

2. Add a route parameter called `productId` to the Route path below:


<Route path="/products/:productId" element={<ProductDetail />} />


3. Add whatever you need to add for the component below to display
   the route parameter in the <h1>


function ProductDetail() {
	const productId = useParams()
    return <h1>Product detail page goes here{productId}</h1>
}

1. What is the primary reason to use a nested route?
The primary reason why we use nested routes is to 
have a shared ui in the different components or routes
in our application

-Whenever we have some shared UI between routes in our app.

2. What is a "Layout Route"?
The layout Route is the layout of the component
in our application 

-It's the parent route of some nested routes that contains just
the portion of the UI that will be shared.

3. What does the <Outlet /> component do? When do you use it?
the outlet component is responsible on displaying the nested routes
or child route it acts like a placeholder and we can use it 
when we are creating the layout Route

We use it anytime we have a parent Route that's wrapping 
children routes. It renders the matching child route's
`element` prop given in its route definition

4. What is an "Index Route"?
index routes is simple as the index.html that are the default page when the
web application or site is being render first when we visit a website.

It's the "default route" we want to render when the path
of the parent route matches. It gives us a chance to render
an element inside the parent's <Outlet /> at the same path
as the parent route.