export default function Friends(friend) {
    return (
        <div className="card">
            <h4>Name: {friend.friend.name}</h4>
            <h4>Email: {friend.friend.email}</h4>
            <h4>Phone: {friend.friend.phone}</h4>
        </div>
    );
}