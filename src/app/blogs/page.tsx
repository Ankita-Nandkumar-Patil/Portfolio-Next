import Image from "next/image";

// ************************ STATIC DATA *******************************
// fetching post data from api
const getPost =async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  return resp.json();
}

// fetching user data from api
const getUser =async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  return resp.json();
}


// ************************ DYNAMIC DATA *******************************
// fetching Dog data from api (dynamic images)
const getDog =async () => {
  const resp = await fetch("https://dog.ceo/api/breeds/image/random",
  // {cache : "no-store",}  //to not to store fetched data in cache memory. i.e. : To display a dynamic img every time we refresh
   {next: { 
    revalidate: 10,    //it will accept the refresh request after the time interval that we set : (10 sec)
   }
  }
  );
  return resp.json();
}

export default async function Blogs() {
  // const blogs = await getData(); //only for user data 

  const [posts, users, dog] = await Promise.all([getPost(), getUser(), getDog()])
  return (
    <div>
      <h2>POST DATA</h2>
      {
        posts.map((post:any)=>{
          return <p>{post.title}</p>   //will return list of post titles from api
        })
      }

      <h2>USERS DATA</h2>
      <div>
        {
          users.map((user:any)=>{
            return (
              <>
            <p>{user.name}</p>
            <p>{user.phone}</p>
            </>
            )
          })
        }
      </div>


      <h2>DOG IMAGES : dynamic</h2>
      <Image src={dog.message} alt="dog Image" width={300} height={300}/>

    </div>
  )
}

 
