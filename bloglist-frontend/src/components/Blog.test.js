import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Blog from "./Blog";
import userEvent from '@testing-library/user-event'

let container
let blog
beforeEach(() => {
    blog = {
        title: "Pirates of the Caribbean",
        author: 'Walt Disney',
        url: "http://waltdisney.com",
        likes: 21
    };
    container = 
    render(<Blog blog={blog} />).container
})

test("initial div display in blog", () => {
  const user = userEvent.setup();


  const input = container.querySelector('.shortDiv')
  screen.debug(input)
});
