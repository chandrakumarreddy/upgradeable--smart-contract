### Upgradable contracts

One of the basic rules of EVM is that once a contract is deployed, it cannot be changed. Instead, an upgradable smart contract uses a special proxy pattern. The latter involves deploying proxy contracts and implementation contracts (logic contracts).

- User interacts with proxy contract that intiates fallback function that deligates call to contract implementation(V1).
- Proxy contract has upgrade function to deligate call to new contract implementation(V2).
- For security purpose, upgrade function should be invoked by only Admin.
- Admin interacts with proxy admin contract which interm calls upgrade function of the proxy

![image 1](https://raw.githubusercontent.com/chandrakumarreddy/upgradeable--smart-contract/master/images/Screenshot%202022-04-16%20at%207.09.59%20PM.png)

![image 2](https://i0.wp.com/blog.openzeppelin.com/wp-content/uploads/2020/09/graph-04.png?resize=840%2C420&ssl=1)

![image3](https://res.cloudinary.com/practicaldev/image/fetch/s--nGhnsYS9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/84bmjpjdb8d7rbc4szqc.png)
