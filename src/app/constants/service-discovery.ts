const services = {
  local: {
    userService: ""
  },
  demo: {
    appName: "Retail Calculus production",
    appShortName: "RC",
    appVersion: 2.0,
    apiServer: "http://34.236.206.212:8040",
    authenticationServer: "http://34.236.206.212:8040",
    userService: {
      name: "entity",
      url: "http://34.236.206.212:8040"
    },
    entityService: {
      name: "entity",
      url: "http://34.236.206.212:8083"
    },
    uddService: {
      name: "udd",
      url: "http://34.236.206.212:8084"
    },
    locationService: {
      name: "location",
      url: "http://34.236.206.212:8085"
    },
    vendorService: {
      name: "vendor",
      url: "http://34.236.206.212:8086"
    },
    mtoService: {
      name: "mto",
      url: "http://34.236.206.212:8087"
    },
    itemAndRetailService: {
      name: "itemAndRetail",
      url: "http://34.236.206.212:8088"
    },
    dataLakeService: {
      name: "datalake",
      url: "http://34.236.206.212:8093"
    },
    changeHistoryService: {
      name: "datalake",
      url: "http://34.236.206.212:8090"
    },
    statsService: {
      name: "stats",
      url: "http://34.236.206.212:8081"
    },
    jobsService: {
      name: "jobs",
      url: "http://34.236.206.212:8041"
    },
    tagService: {
      name: "tags",
      url: "http://34.236.206.212:8051"
    },
    offersService: {
      name: "tags",
      url: "http://34.236.206.212:8052"
    },
    productExplorerService: {
      applicationUrl: "http://34.236.206.212:8081"
    },
    appOrganization: "ndVOR IT solutions",
    socketServer: "http://34.236.206.212:8080"
  }
};

const environment = "demo";

export const ServiceDiscovery = services[environment];
