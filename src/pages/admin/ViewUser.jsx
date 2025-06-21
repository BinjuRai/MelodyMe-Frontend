export default function ViewUser() {
   const { id } = useParams()
    const { user, error, isPending } = useGetOneUser(id)
    if(error) <>{error}</>
    return (
         <div>
            View Course
            {user.name}
            <img src={getBackendImageUrl(user.filepath)}></img>
        </div>
    );
}
  