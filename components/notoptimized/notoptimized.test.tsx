import { render } from "@testing-library/react"
import { NotOptimized } from "./notoptimized";

describe("NotOptimized", ()=>{
    test("Create NotOptimized", ()=>{
       const notOptimized =  render(<NotOptimized/>)

        expect(notOptimized.baseElement).toMatchSnapshot();
    })
})