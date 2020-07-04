// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SocialMusic {
    struct User {
        bytes32 name;
        uint256 age;
        string state;
        string[] musicRecommendations;
        address[] following;
    }

    mapping(address => User) public users;
    address[] public userList;

    function addSong(string memory _songName) public {
        require(
            bytes(_songName).length > 0 && bytes(_songName).length <= 100,
            "Song name's length must be in 1 - 100"
        );
        users[msg.sender].musicRecommendations.push(_songName);
    }

    function initialAccount(
        bytes32 _name,
        uint256 _age,
        string memory _state
    ) public {
        require(_name.length > 0, "name can not be empty.");
        User memory newUser = User(
            _name,
            _age,
            _state,
            users[msg.sender].musicRecommendations,
            users[msg.sender].following
        );
        users[msg.sender] = newUser;
        userList.push(msg.sender);
    }

    function follow(address _user) public{
      require(_user != address(0), "user is invalid.");
      users[msg.sender].following.push(_user);
    }

    function getUsersList() public view returns (address[] memory){
        return userList;
    }

    function getUsersMusicRecommendation(address _user, uint256 _recommendationIndex) public view returns(string memory){
        return users[_user].musicRecommendations[_recommendationIndex];
    }

    function getUsersMusicRecommendationLength(address  _user) public view returns (uint256){
        return users[_user].musicRecommendations.length;
    }

    function getUsersFollowings(address _user) public view returns (address[] memory){
        return users[_user].following;
    }
}