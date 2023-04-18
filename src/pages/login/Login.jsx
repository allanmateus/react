import React from 'react'

function Login() {
  return (
    <>
      <div className="flex  items-center h-screen w-screen justify-center">
        <div id="login" className='flex flex-col w-2/5 h-3/6 justify-center items-center  bg-zinc-400'>
          <div>
            <h2 className="text-xl">Login</h2>
          </div>
          <div>
            <form action="" className="form-login w-2 ">
              <label htmlFor="user">Usuário</label>
              <input className="my-1 px-4 py-3 border border-2 border-black rounded-md" type="text" id="user" name='user' placeholder='Usuário'/>
              <label htmlFor="password">Senha</label>
              <input className="my-1 px-4 py-3 border border-2 border-black rounded-md" type="password" id="password" name='password' placeholder='Senha'/>
              <button className="my-1 btn-enviar py-2 px-3 text-white rounded-md bg-blue-600" nome="btn-enviar" type='submit'>Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login