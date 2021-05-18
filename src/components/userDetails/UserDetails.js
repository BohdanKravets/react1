export default function UserDetails({location: {state: user}}) {

    return (
        <div>
            {user && <div>
                {user.first_name} {user.last_name} -
                <div><img src={user.avatar} alt=""/></div>
                <div>{user.email}</div>
            </div>}
        </div>
    );
}