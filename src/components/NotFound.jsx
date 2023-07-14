import React from 'react'
import "./Not_found.css"

const NotFound = () => {
  return (
    
    <div class="container">
    <h1 class="error-heading">404 Error</h1>
    <p class="error-message">Oops! The page you are looking for could not be found.</p>
    <a class="home-link" href="/">Go Back to Homepage</a>
  </div>
     
  )
}

export default NotFound