// @ts-ignore
import "./index.css"

function App() {

  return (
    <div className="justify-center flex">
        <div className="grid grid-cols-1 gap-4">
            <div>
                <h1 className="ml-0 m-5 text-7xl text-cyan-500">HTML 101</h1>
            </div>
            <div>
                <h1 className="ml-0 text-2xl">Basis Structure von einer HTML File:</h1>
                <br/>
                <code className="">
                    &lt;!DOCTYPE html&gt; <br/>
                    &lt;html&gt; <br/> <br/>
                    <a className="ml-5"> &lt;head&gt; <br/> <br/> </a>
                    <a className="ml-5">&lt;/head&gt; <br/> <br/> </a>
                    <a className="ml-5">&lt;body&gt; <br/> <br/> </a>
                    <a className="ml-5">&lt;/body&gt; <br/> <br/> </a>
                    &lt;/html&gt;<br/>
                </code>
            </div>
            <div>
                <h1 className="ml-0 text-2xl">Advanced Structure von einer HTML File:</h1>
                <br/>
                <code className="">
                    &lt;!DOCTYPE html&gt; <br/>
                    &lt;html&gt; <br/> <br/>
                    <a className="ml-5"> &lt;head&gt; <br/> <br/> </a>
                    <a className="ml-10">&lt;meta charSet="UTF-8"/&gt;</a> <br/>
                    <a className="ml-10"> &lt;title&gt;a Title&lt;/title&gt;</a> <br/> <br/>
                    <a className="ml-5">&lt;/head&gt; <br/> <br/> </a>
                    <a className="ml-5">&lt;body&gt; <br/> <br/> </a>
                    <a className="ml-5">&lt;/body&gt; <br/> <br/> </a>
                    &lt;/html&gt;<br/>
                </code>
            </div>
            <div className="mb-10"></div>
        </div>
    </div>
  )
}

export default App
