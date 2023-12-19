import { render, screen } from "@testing-library/react";
import App from "./App";

test('should render About us link', () => {
    render(<App/>)
    const link = screen.getByText(/About us/i)
    expect(link).toBeInTheDocument();
  });
  
