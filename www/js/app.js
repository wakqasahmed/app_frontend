/**
 * Created by waqasahmed on 5/3/15.
 */

var airlines = [{"city": "Algiers", "name": "Houari Boumediene Airport", "country": "Algeria", "iata": "ALG"}, {"city": "St Johns", "name": "V.C. Bird International Airport", "country": "Antigua and Barbuda", "iata": "ANU"}, {"city": "Buenos Aires", "name": "Aeroparque Jorge Newbery Airport", "country": "Argentina", "iata": "AEP"}, {"city": "Santiago del Estero", "name": "Ángel de la Paz Aragonés Airport", "country": "Argentina", "iata": "SDE"}, {"city": "Adelaide", "name": "Adelaide Airport", "country": "Australia", "iata": "ADL"}, {"city": "Brisbane", "name": "Brisbane Airport", "country": "Australia", "iata": "BNE"}, {"city": "Brisbane", "name": "Brisbane Archerfield Airport", "country": "Australia", "iata": "ACF"}, {"city": "Cairns", "name": "Cairns Airport ", "country": "Australia", "iata": "CNS"}, {"city": "Canberra", "name": "Canberra International Airport", "country": "Australia", "iata": "CBR"}, {"city": "Gladstone", "name": "Gladstone Airport", "country": "Australia", "iata": "GLT"}, {"city": "Gold Coast", "name": "Gold Coast Airport", "country": "Australia", "iata": "OOL"}, {"city": "Melbourne", "name": "Melbourne Airport ", "country": "Australia", "iata": "MEL"}, {"city": "Sydney", "name": "Sydney Airport", "country": "Australia", "iata": "SYD"}, {"city": "Perth", "name": "Perth Airport", "country": "Australia", "iata": "PER"}, {"city": "Innsbruck", "name": "Innsbruck Airport", "country": "Austria", "iata": "INN"}, {"city": "Linz", "name": "Linz Airport", "country": "Austria", "iata": "LNZ"}, {"city": "Vienna", "name": "Vienna International Airport ", "country": "Austria", "iata": "VIE"}, {"city": "Bahrain", "name": "Bahrain International Airport", "country": "Bahrain", "iata": "BAH"}, {"city": "Brussels", "name": "Brussels Airport", "country": "Belgium", "iata": "BRU"}, {"city": "Brasilia", "name": "Brasilia Airport", "country": "Brazil", "iata": "BSB"}, {"city": "Salvador", "name": "Deputado Luiz Eduardo Magalhães Airport", "country": "Brazil", "iata": "SSA"}, {"city": "Recife", "name": "Guararapes-Gilberto Freyre International Airport", "country": "Brazil", "iata": "REC"}, {"city": "Sao Paulo", "name": "Guarulhos International Airport", "country": "Brazil", "iata": "GRU"}, {"city": "Rio De Janeiro", "name": "Metropolitan Area", "country": "Brazil", "iata": "RIO"}, {"city": "Rio De Janeiro", "name": "Santos Dumont Airport", "country": "Brazil", "iata": "SDU"}, {"city": "Sao Paulo", "name": "São Paulo–Congonhas Airport", "country": "Brazil", "iata": "CGH"}, {"city": "Calgary", "name": "Calgary International Airport", "country": "Canada", "iata": "YYC"}, {"city": "Montreal", "name": "Pierre Elliott Trudeau International Airport", "country": "Canada", "iata": "YUL"}, {"city": "Toronto", "name": "Toronto Pearson International Airport", "country": "Canada", "iata": "YYZ"}, {"city": "Vancouver", "name": "Vancouver International Airport", "country": "Canada", "iata": "YVR"}, {"city": "St John's", "name": "St. John's International Airport", "country": "Canada", "iata": "YYT"}, {"city": "Halifax", "name": "Halifax Stanfield International Airport", "country": "Canada", "iata": "YHZ"}, {"city": "Santiago Island", "name": "Nelson Mandela International Airport", "country": "Cape Verde", "iata": "RAI"}, {"city": "Santiago de Chile (capital city)", "name": "Santiago International Airport", "country": "Chile", "iata": "SCL"}, {"city": "Beijing", "name": "Beijing Capital International Airport", "country": "China", "iata": "BJS"}, {"city": "Beijing", "name": "Beijing Nanyuan Airport", "country": "China", "iata": "NAY"}, {"city": "Shanghai", "name": "Hongqiao International Airport", "country": "China", "iata": "SHA"}, {"city": "Shanghai", "name": "Pudong International Airport", "country": "China", "iata": "PVG"}, {"city": "Shenzhen", "name": "Shenzhen Bao'an International Airport", "country": "China", "iata": "SZX"}, {"city": "Guangzhou", "name": "Baiyun International Airport", "country": "China", "iata": "CAN"}, {"city": "Beijing", "name": "Beijing", "country": "China", "iata": "PEK"}, {"city": "Chengdu", "name": "Chengdu Shuangliu International Airport", "country": "China", "iata": "CTU"}, {"city": "Kunming", "name": "Kunming Changshui International Airport", "country": "China", "iata": "KMG"}, {"city": "Hangzhou", "name": "Hangzhou International Airport", "country": "China", "iata": "HGH"}, {"city": "Bogota", "name": "El Dorado International Airport", "country": "Colombia", "iata": "BOG"}, {"city": "Santiago", "name": "Antonio Maceo International Airport", "country": "Cuba", "iata": "SCU"}, {"city": "Larnaca", "name": "Larnaca International Airport", "country": "Cyprus", "iata": "LCA"}, {"city": "Paphos", "name": "Paphos International Airport", "country": "Cyprus", "iata": "PFO"}, {"city": "Prague", "name": "Václav Havel Airport Prague ", "country": "Czech Republic", "iata": "PRG"}, {"city": "Billund", "name": "Billund Airport", "country": "Denmark", "iata": "BLL"}, {"city": "Copenhagen", "name": "Copenhagen Airport", "country": "Denmark", "iata": "CPH"}, {"city": "Santiago de los Caballeros", "name": "Cibao International Airport", "country": "Dominican Republic", "iata": "STI"}, {"city": "Quito", "name": "Quito International Airport", "country": "Ecuador", "iata": "UIO"}, {"city": "Cairo", "name": "Cairo International Airport", "country": "Egypt", "iata": "CAI"}, {"city": "Hurghada", "name": "Hurghada International Airport", "country": "Egypt", "iata": "HRG"}, {"city": "Sharm El Sheikh", "name": "Sharm el-Sheikh International Airport", "country": "Egypt", "iata": "SSH"}, {"city": "Tallinn", "name": "Lennart Meri Tallinn Airport", "country": "Estonia", "iata": "TLL"}, {"city": "Addis Ababa", "name": "Addis Ababa Bole International Airport", "country": "Ethiopia", "iata": "ADD"}, {"city": "Helsinki", "name": "Helsinki-Vantaa Airport", "country": "Finland", "iata": "HEL"}, {"city": "Paris", "name": "Charles de Gaulle Airport ", "country": "France", "iata": "CDG"}, {"city": "Nice", "name": "Nice Côte d'Azur Airport", "country": "France", "iata": "NCE"}, {"city": "Paris", "name": "Paris Orly Airport", "country": "France", "iata": "ORY"}, {"city": "Toulouse", "name": "Toulouse Blagnac International Airport", "country": "France", "iata": "TLS"}, {"city": "Xiamen", "name": "Xiamen Gaoqi International Airport", "country": "China", "iata": "XMN"}, {"city": "Munich", "name": "Munich Airport ", "country": "Germany", "iata": "MUC"}, {"city": "Berlin", "name": "Berlin Tegel Airport", "country": "Germany", "iata": "TXL"}, {"city": "Cologne", "name": "Cologne International Airport", "country": "Germany", "iata": "CGN"}, {"city": "Dusseldorf", "name": "Düsseldorf International Airport", "country": "Germany", "iata": "DUS"}, {"city": "Frankfurt", "name": "Frankfurt Airport", "country": "Germany", "iata": "FRA"}, {"city": "Hamburg", "name": "Hamburg Airport ", "country": "Germany", "iata": "HAM"}, {"city": "Leipzig", "name": "Leipzig/Halle Airport", "country": "Germany", "iata": "LEJ"}, {"city": "Athens ", "name": "Athens International Airport", "country": "Greece", "iata": "ATH"}, {"city": "Pointe A Pitre", "name": "Pointe-à-Pitre International Airport", "country": "Guadeloupe", "iata": "PTP"}, {"city": "Hong Kong", "name": "Hong Kong International Airport", "country": "Hong Kong", "iata": "HKG"}, {"city": "Budapest", "name": "Budapest Ferihegy International Airport", "country": "Hungary", "iata": "BUD"}, {"city": "Keflavik", "name": "Reykjavík-Keflavík International Airport", "country": "Iceland", "iata": "KEF"}, {"city": "Bengaluru", "name": "Bengaluru International Airport", "country": "India", "iata": "BLR"}, {"city": "Mumbai", "name": "Chhatrapati Shivaji International Airport ", "country": "India", "iata": "BOM"}, {"city": "New Delhi", "name": "Indira Gandhi International Airport", "country": "India", "iata": "DEL"}, {"city": "Jakarta", "name": "Metropolitan Area", "country": "Indonesia", "iata": "JKT"}, {"city": "Tehran", "name": "Mehrabad International Airport ", "country": "Iran", "iata": "THR"}, {"city": "Mashhad", "name": "Shahid Hashemi Nejad International Airport", "country": "Iran", "iata": "MHD"}, {"city": "Dublin", "name": "Dublin Airport", "country": "Ireland", "iata": "DUB"}, {"city": "Tel Aviv", "name": "Ben Gurion International ", "country": "Israel", "iata": "TLV"}, {"city": "Rome", "name": "Leonardo da Vinci–Fiumicino Airport", "country": "Italy", "iata": "FCO"}, {"city": "Milan", "name": "Malpensa Airport", "country": "Italy", "iata": "MXP"}, {"city": "Palermo", "name": "Palermo Airport", "country": "Italy", "iata": "PMO"}, {"city": "Venice", "name": "Venice Marco Polo Airport ", "country": "Italy", "iata": "VCE"}, {"city": "Sapporo", "name": "New Chitose Airport", "country": "Japan", "iata": "CTS"}, {"city": "Sapporo", "name": "Okadama Airport", "country": "Japan", "iata": "OKD"}, {"city": "Fukuoka", "name": "Fukuoka Airport", "country": "Japan", "iata": "FUK"}, {"city": "Fukushima", "name": "Fukushima Airport", "country": "Japan", "iata": "FKS"}, {"city": "Tokyo", "name": "Haneda Airport International", "country": "Japan", "iata": "HND"}, {"city": "Osaka", "name": "Kansai International Airport", "country": "Japan", "iata": "KIX"}, {"city": "Tokyo", "name": "Narita International Airport", "country": "Japan", "iata": "NRT"}, {"city": "Nairobi", "name": "Jomo Kenyatta International", "country": "Kenya", "iata": "NBO"}, {"city": "Beirut", "name": "Beirut Rafic Hariri International Airport ", "country": "Lebanon", "iata": "BEY"}, {"city": "Luxembourg", "name": "Luxembourg – Findel Airport", "country": "Luxembourg", "iata": "LUX"}, {"city": "Kuala Lumpur", "name": "Kuala Lumpur International Airport", "country": "Malaysia", "iata": "KUL"}, {"city": "Malta", "name": "Luqa Airport", "country": "Malta", "iata": "MLA"}, {"city": "Mauritius", "name": "Sir Seewoosagur Ramgoolam Int'l ", "country": "Mauritius", "iata": "MRU"}, {"city": "Cancun", "name": "Cancún International Airport ", "country": "Mexico", "iata": "CUN"}, {"city": "Mexico City", "name": "Mexico City International Airport", "country": "Mexico", "iata": "MEX"}, {"city": "Amsterdam", "name": "Amsterdam Airport Schiphol", "country": "Netherlands", "iata": "AMS"}, {"city": "St Maarteen", "name": "Princess Juliana International Airport", "country": "Netherlands Antilles", "iata": "SXM"}, {"city": "Auckland", "name": "Auckland International Airport", "country": "New Zealand", "iata": "AKL"}, {"city": "Christchurch", "name": "Christchurch International Airport", "country": "New Zealand", "iata": "CHC"}, {"city": "Queenstown", "name": "Queenstown Airport", "country": "New Zealand", "iata": "ZQN"}, {"city": "Wellington", "name": "Wellington International Airport", "country": "New Zealand", "iata": "WLG"}, {"city": "Oslo", "name": "Oslo Airport, Gardermoen ", "country": "Norway", "iata": "OSL"}, {"city": "Muscat", "name": "Muscat International Airport", "country": "Oman", "iata": "MCT"}, {"city": "Lahore", "name": "Allama Iqbal International Airport", "country": "Pakistan", "iata": "LHE"}, {"city": "Karachi", "name": "Jinnah International Airport", "country": "Pakistan", "iata": "KHI"}, {"city": "Hyderabad", "name": "Hyderabad Airport", "country": "Pakistan", "iata": "HDD"}, {"city": "Lima", "name": "Jorge Chávez International Airport", "country": "Peru", "iata": "LIM"}, {"city": "Manila", "name": "Ninoy Aquino International Airport", "country": "Philippines", "iata": "MNL"}, {"city": "Krakow", "name": "John Paul II International Airport", "country": "Poland", "iata": "KRK"}, {"city": "Warsaw", "name": "Warsaw Chopin Airport", "country": "Poland", "iata": "WAW"}, {"city": "Porto", "name": "Francisco de Sá Carneiro Airport", "country": "Portugal", "iata": "OPO"}, {"city": "Lisbon", "name": "Lisbon Airport", "country": "Portugal", "iata": "LIS"}, {"city": "San Juan", "name": "Luis Munoz Marin International Airport", "country": "Puerto Rico", "iata": "SJU"}, {"city": "Doha", "name": "Hamad International Airport", "country": "Qatar", "iata": "DOH"}, {"city": "Bucharest", "name": "Henri Coanda International Airport", "country": "Romania", "iata": "OTP"}, {"city": "Moscow", "name": "Domodedovo International Airport", "country": "Russia", "iata": "DME"}, {"city": "Khabarovsk", "name": "Khabarovsk Novy Airport", "country": "Russia", "iata": "KHV"}, {"city": "Samara", "name": "Kurumoch International Airport", "country": "Russia", "iata": "KUF"}, {"city": "St Petersburg", "name": "Pulkovo International Airport ", "country": "Russia", "iata": "LED"}, {"city": "Moscow", "name": "Sheremetyevo International Airport ", "country": "Russia", "iata": "SVO"}, {"city": "Sochi", "name": "Sochi Internaional Airport", "country": "Russia", "iata": "AER"}, {"city": "Vladivostok", "name": "Vladivostok International Airport ", "country": "Russia", "iata": "VVO"}, {"city": "Kazan", "name": "Kazan International Airport", "country": "Russia", "iata": "KZN"}, {"city": "Jeddah", "name": "King Abdulaziz International Airport", "country": "Saudi Arabia", "iata": "JED"}, {"city": "Riyadh", "name": "King Khaled International Airport", "country": "Saudi Arabia", "iata": "RUH"}, {"city": "Belgrade", "name": "Belgrade Nikola Tesla International Airport", "country": "Serbia", "iata": "BEG"}, {"city": "Singapore", "name": "Changi Airport Singapore", "country": "Singapore", "iata": "SIN"}, {"city": "Johannesburg", "name": "OR Tambo International Airport", "country": "South Africa", "iata": "JNB"}, {"city": "Cape Town", "name": "Cape Town International Airport", "country": "South Africa", "iata": "CPT"}, {"city": "Durban", "name": "King Shaka International Airport ", "country": "South Africa", "iata": "DUR"}, {"city": "Johannesburg", "name": "Lanseria Airport", "country": "South Africa", "iata": "HLA"}, {"city": "Johannesburg", "name": "Rand Airport", "country": "South Africa", "iata": "QRA"}, {"city": "Seoul", "name": "Gimpo International Airport", "country": "South Korea", "iata": "SEL"}, {"city": "Seoul", "name": "Incheon International Airport", "country": "South Korea", "iata": "ICN"}, {"city": "Jeju", "name": "Jeju International Airport", "country": "South Korea", "iata": "CJU"}, {"city": "Alicante", "name": "Alicante-Elche Airport", "country": "Spain", "iata": "ALC"}, {"city": "Madrid", "name": "Barajas International Airport", "country": "Spain", "iata": "MAD"}, {"city": "Barcelona", "name": "Barcelona El Prat Airport", "country": "Spain", "iata": "BCN"}, {"city": "Cordoba", "name": "Córdoba Airport", "country": "Spain", "iata": "ODB"}, {"city": "Palma De Mallorca", "name": "Palma de Mallorca Airport", "country": "Spain", "iata": "PMI"}, {"city": "Santiago de Compostela", "name": "Santiago de Compostela Airport", "country": "Spain", "iata": "SCQ"}, {"city": "Khartoum", "name": "Khartoum International Airport", "country": "Sudan", "iata": "KRT"}, {"city": "Stockholm", "name": "Stockholm Arlanda Airport", "country": "Sweden", "iata": "ARN"}, {"city": "Basel-Mulhouse", "name": "EuroAirport Basel-Mulhouse-Freiburg", "country": "Switzerland", "iata": "EAP"}, {"city": "Geneva", "name": "Geneva-Cointrin International Airport ", "country": "Switzerland", "iata": "GVA"}, {"city": "Zurich", "name": "Zürich Airport", "country": "Switzerland", "iata": "ZRH"}, {"city": "Taiwan ", "name": "Taiwan Taoyuan International Airport", "country": "Taiwan", "iata": "TPE"}, {"city": "Bangkok", "name": "Suvarnabhumi International Airport", "country": "Thailand", "iata": "BKK"}, {"city": "Port Of Spain", "name": "Piarco International Airport", "country": "Trinidad and Tobago", "iata": "POS"}, {"city": "Ankara", "name": "Ankara Esenboga Airport", "country": "Turkey", "iata": "ESB"}, {"city": "Antalya", "name": "Antalya Airport", "country": "Turkey", "iata": "AYT"}, {"city": "Istanbul", "name": "Atatürk International Airport", "country": "Turkey", "iata": "IST"}, {"city": "Abu Dhabi", "name": "Abu Dhabi International Airport", "country": "UAE", "iata": "AUH"}, {"city": "Dubai", "name": "Dubai International Airport", "country": "UAE", "iata": "DXB"}, {"city": "Jersey", "name": "Jersey Airport", "country": "UK", "iata": "JER"}, {"city": "Edinburgh", "name": "Edinburgh Airport", "country": "UK", "iata": "EDI"}, {"city": "London", "name": "London Gatwick Airport ", "country": "UK", "iata": "LGW"}, {"city": "London", "name": "London Heathrow Airport", "country": "UK", "iata": "LHR"}, {"city": "London", "name": "London Stansted Airport", "country": "UK", "iata": "STN"}, {"city": "Manchester", "name": "Manchester Airport ", "country": "UK", "iata": "MAN"}, {"city": "Newcastle", "name": "Newcastle International ", "country": "UK", "iata": "NCL"}, {"city": "Birmingham", "name": "Birmingham Airport", "country": "UK", "iata": "BHX"}, {"city": "Bristol", "name": "Bristol Airport", "country": "UK", "iata": "BRS"}, {"city": "Kiev", "name": "International Airport Kiev", "country": "Ukraine", "iata": "IEV"}, {"city": "Indianapolis", "name": "Indianapolis International Airport", "country": "USA", "iata": "IND"}, {"city": "Austin", "name": "Austin-Bergstrom International Airport", "country": "USA", "iata": "AUS"}, {"city": "Baltimore", "name": "Baltimore–Washington International Airport", "country": "USA", "iata": "BWI"}, {"city": "Birmingham", "name": "Birmingham–Shuttlesworth International Airport", "country": "USA", "iata": "BHM"}, {"city": "Boulder", "name": "Boulder City Municipal Airport", "country": "USA", "iata": "BLD"}, {"city": "Charlotte", "name": "Charlotte Douglas International Airport ", "country": "USA", "iata": "CLT"}, {"city": "Chicago", "name": "Chicago O'Hare International Airport", "country": "USA", "iata": "ORD"}, {"city": "Dallas", "name": "Dallas Love Field Airport", "country": "USA", "iata": "DAL"}, {"city": "Dallas-Ft Worth", "name": "Dallas/Fort Worth International Airport ", "country": "USA", "iata": "DFW"}, {"city": "Denver", "name": "Denver International Airport", "country": "USA", "iata": "DEN"}, {"city": "Detroit", "name": "Detroit Metropolitan Airport", "country": "USA", "iata": "DTW"}, {"city": "Raleigh-Durham", "name": "Durham/Raleigh Airport", "country": "USA", "iata": "RDU"}, {"city": "Fort Lauderdale", "name": "Fort Lauderdale Hollywood International Airport", "country": "USA", "iata": "FLL"}, {"city": "Houston", "name": "George Bush Intercontinental Airport", "country": "USA", "iata": "IAH"}, {"city": "Atlanta", "name": "Hartsfield-Jackson Atlanta International Airport", "country": "USA", "iata": "ATL"}, {"city": "Jackson", "name": "Jackson Hole Airport", "country": "USA", "iata": "JAC"}, {"city": "Jacksonville", "name": "Jacksonville International Airport", "country": "USA", "iata": "JAX"}, {"city": "New York", "name": "John F Kennedy International Airport", "country": "USA", "iata": "JFK"}, {"city": "Santa Ana", "name": "John Wayne Airport", "country": "USA", "iata": "SNA"}, {"city": "Kansas City", "name": "Kansas City International Airport", "country": "USA", "iata": "MCI"}, {"city": "Key West", "name": "Key West International Airport", "country": "USA", "iata": "EYW"}, {"city": "Seattle", "name": "King County International (Boeing Field)", "country": "USA", "iata": "BFI"}, {"city": "Kingston", "name": "Kinston Regional Jetport", "country": "USA", "iata": "ISO"}, {"city": "New York", "name": "LaGuardia Airport", "country": "USA", "iata": "LGA"}, {"city": "Boston", "name": "Logan International Airport ", "country": "USA", "iata": "BOS"}, {"city": "Long Beach", "name": "Long Beach Airport", "country": "USA", "iata": "LGB"}, {"city": "Los Angeles", "name": "Los Angeles International Airport", "country": "USA", "iata": "LAX"}, {"city": "Las Vegas", "name": "McCarran International Airport", "country": "USA", "iata": "LAS"}, {"city": "Miami", "name": "Miami International Airport ", "country": "USA", "iata": "MIA"}, {"city": "Nantucket", "name": "Nantucket Memorial Airport", "country": "USA", "iata": "ACK"}, {"city": "Newark", "name": "Newark Liberty International Airport", "country": "USA", "iata": "EWR"}, {"city": "Cincinnati", "name": "Northern Kentucky International Airport", "country": "USA", "iata": "CVG"}, {"city": "Orlando", "name": "Orlando International Airport", "country": "USA", "iata": "MCO"}, {"city": "Philadelphia", "name": "Philadelphia International Airport", "country": "USA", "iata": "PHL"}, {"city": "Washington", "name": "Ronald Reagan National Airport", "country": "USA", "iata": "DCA"}, {"city": "Minneapolis", "name": "Saint Paul International Airport", "country": "USA", "iata": "MSP"}, {"city": "Salt Lake City", "name": "Salt Lake City International Airport", "country": "USA", "iata": "SLC"}, {"city": "San Diego", "name": "San Diego International Airport", "country": "USA", "iata": "SAN"}, {"city": "San Francisco", "name": "San Francisco International Airport", "country": "USA", "iata": "SFO"}, {"city": "Phoenix", "name": "Sky Harbor International Airport", "country": "USA", "iata": "PHX"}, {"city": "Seattle", "name": "Tacoma International Airport", "country": "USA", "iata": "SEA"}, {"city": "Tampa", "name": "Tampa International Airport", "country": "USA", "iata": "TPA"}, {"city": "Washington", "name": "Washington Dulles International Airport", "country": "USA", "iata": "IAD"}, {"city": "Houston", "name": "William P. Hobby Airport", "country": "USA", "iata": "HOU"}, {"city": "Honolulu", "name": "Honolulu International Airport", "country": "USA", "iata": "HNL"}, {"city": "Harare", "name": "Harare International Airport", "country": "Zimbabwe", "iata": "HRE"}];

var globals = {};
globals.checkedServer = false;
globals.assetServer = "http://backend-ifeed.rhcloud.com/api/locations/active"; //http://backend-ifeed.rhcloud.com/api/locations/accountId/active
globals.assetSubDir = "assets";
globals.surveyUri = "http://backend-ifeed.rhcloud.com/api/surveys/5540b163d80bd368de2f4bd5";
globals.responseUri = "http://backend-ifeed.rhcloud.com/api/device/responses";

airlines = airlines.sort(function(a, b) {

    var airlineA = a.name.toLowerCase();
    var airlineB = b.name.toLowerCase();

    if(airlineA > airlineB) return 1;
    if(airlineA < airlineB) return -1;
    return 0;
});

var app = angular.module('app', ['ionic', 'ngCordova'])

    .run(function($ionicPlatform, $rootScope) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
            if(!$rootScope.airport)
                $rootScope.airport = {"regNumber": '', "countLocalResponses": '', "countTotalResponses": 0};

            //console.log(" $rootScope.airport "+$rootScope.airport.countLocalResponses)
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tabs.intro', {
                url: "/intro",
                views: {
                    'intro-tab': {
                        templateUrl: "templates/intro.html",
                        controller: 'IntroCtrl'
                    }
                }
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "templates/home.html",
                        controller: 'HomeTabCtrl'
                    }
                }
            })
            .state('tabs.identityScan', {
                url: "/identityscan",
                views: {
                    'home-tab': {
                        templateUrl: "templates/identity-scan.html",
                        controller: 'AppCtrl'
                    }
                }
            })
            .state('tabs.favoriteAirport', {
                url: "/favoriteairport",
                views: {
                    'home-tab': {
                        templateUrl: "templates/favorite-airport.html",
                        controller: 'AppCtrl'
                    }
                }
            })
            .state('tabs.thankyou', {
                url: "/thankyou",
                views: {
                    'home-tab': {
                        templateUrl: "templates/thank-you.html",
                        controller: 'AppCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise("/tab/home");

    });

app.controller("AppCtrl", ['$scope', '$rootScope', '$cordovaBarcodeScanner', '$cordovaFile', '$cordovaNetwork', '$http', 'FlightDataService', function($scope, $rootScope, $cordovaBarcodeScanner, $cordovaFile, $cordovaNetwork, $http, FlightDataService) {

    console.log("AppCtrl");
    //console.log($rootScope.airport);

    $scope.initialize = function(){
        $rootScope.airport = {"regNumber": '', "countLocalResponses": '', "countTotalResponses": 0};
        //console.log("$rootScope.airport "+$rootScope.airport);
        $rootScope.airport.countLocalResponses = $scope.countResponseData();
        $rootScope.airport.countTotalResponses = $scope.getTotalResponses();
        //console.log("$rootScope.airport "+$rootScope.airport.countLocalResponses);
    };

    $scope.goToHome = function() {
        console.log("reloading");
        location.href = '#/tab/identityscan';
        location.reload();
    };

    $scope.data = {"airlines": [], "search": ''};

    $scope.search = function() {

        FlightDataService.searchAirlines($scope.data.search).then(
            function(matches) {
                $scope.data.airlines = matches;
            }
        )
    };

    $scope.fillInput = function(item) {
        $scope.data.search = item.name + ' (' + item.iata + ')';
        $scope.favAirport = $scope.data.search;
        $scope.data.airlines = [];
    };

    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            $rootScope.airport.regNumber = imageData.text;
            //alert($scope.regNumber);
            //console.log("Barcode Format -> " + imageData.format);
            //console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };

/*
    if(window.localStorage.getItem('surveyData')) {
        var localSurveyData = JSON.parse(window.localStorage.getItem('surveyData'));
        $scope.surveyData = localSurveyData;
        //console.log($scope.surveyData);
    }
    else {
        try{

            // Simple GET request example :
            $http.get(globals.surveyUri).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $scope.surveyData = data;
                    //console.log($scope.surveyData);

                    var dataToStore = JSON.stringify(data);
                    window.localStorage.setItem('surveyData', dataToStore);

                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("something went wrong while trying getting survey");
                });

        } catch(e) {
            console.error("Error calling API survey method: " + e.message);
        }
    }

    if(window.localStorage.getItem('locationData')) {
        var localLocationData = JSON.parse(window.localStorage.getItem('locationData'));
        $scope.locationData = localLocationData;
        //console.log($scope.locationData);
    }
    else {
        try{
            // Simple GET request example :
            $http.get(globals.assetServer).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $scope.locationData = data[0];
                    //console.log($scope.location);

                    var dataToStore = JSON.stringify(data[0]);
                    window.localStorage.setItem('locationData', dataToStore);

                    //window.localStorage.clear();
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("something went wrong while trying getting location");
                });
        } catch(e) {
            console.error("Error calling API active location method: " + e.message);
        }
    }
*/

    $scope.storeLocalResponseData = function(response) {
        //var dataToStore = JSON.stringify(response);

        var localResponseData = $scope.getLocalResponseData();

        if(localResponseData)
        {
            localResponseData.push(response);
        }
        else
        {
            var localResponseData = [];
            localResponseData.push(response);
        }

        window.localStorage.setItem('responseData', JSON.stringify(localResponseData));
        window.localStorage.setItem('totalResponses', $scope.getTotalResponses() + 1);
        $scope.storeInFileSystem(JSON.stringify(response));
        //console.log($scope.getLocalResponseData());
    };

    $scope.getLocalResponseData = function() {
        return JSON.parse(window.localStorage.getItem('responseData'));
    };

    $scope.getTotalResponses = function() {
        try {
            if (window.localStorage.getItem('totalResponses'))
                return parseInt(window.localStorage.getItem('totalResponses'));
            else
                return 0;
        } catch(e) {
            console.error("Error in getting totalResponses from localStorage");
            return 999;
        }
    };

    $scope.storeInFileSystem = function(response){
        ionic.Platform.ready(function() {
            try {
                $cordovaFile.writeExistingFile(cordova.file.externalApplicationStorageDirectory, "responses.json", ',' + response)
                    .then(function (success) {
                        // success
                    }, function (error) {
                        // error
                    });
            } catch(e) {
                    console.error("Error writing in existing file: " + e.message);
            }
        });

    };

    $scope.countResponseData = function() {
        if ($scope.getLocalResponseData()) {
            return $scope.getLocalResponseData().length;
        }
        return 0;
    };

    $scope.submitData = function() {

        //console.log($rootScope.airport);

        var response = {};
        response.dateTaken = new Date();
        response.locationId = "5540acd6d80bd368de2f4bd3";//$scope.locationData._id;
        response.language = "en";
        response.totalTimeTaken = "";
        response.status = "complete";
        response.sourceOS = "";
        response.surveyId = "5540b163d80bd368de2f4bd5";//$scope.surveyData._id;
        response.brandId = "5540ac51d80bd368de2f4bd1";//$scope.locationData.brand._id;
        response.responses = [
            {
                "data": [
                    {
                        "value": $rootScope.airport.regNumber,
                        "questionId": "5540b163d80bd368de2f4bdc",//$scope.surveyData.questions[0].survey[0]._id,
                        "timeTaken": new Date()
                    },
                    {
                        "value": $scope.favAirport,
                        "questionId": "5540b163d80bd368de2f4bd9",//$scope.surveyData.questions[0].survey[1]._id,
                        "timeTaken": new Date()
                    }
                ],
                "prompt": []
            }
        ];

        $scope.storeLocalResponseData(response);


    };

    $rootScope.sendToCloud = function() {

        //var type = $cordovaNetwork.getNetwork();
        var isOnline = $cordovaNetwork.isOnline();
        //var isOffline = $cordovaNetwork.isOffline();

        //console.log("Are we online: " + isOnline);

        if(isOnline) {
            try {
                var data = {"responses": JSON.stringify($scope.getLocalResponseData())};

                // Simple POST request:
                $http.post(globals.responseUri, data).
                    success(function (data, status, headers, config) {
                        // this callback will be called asynchronously
                        // when the response is available
                        //console.log("Success:" + $scope.data);

                        //removing whole responseData object assuming all data was successfully stored in DB
                        window.localStorage.removeItem('responseData');
                        $scope.goToHome();

                    }).
                    error(function (data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        console.log("something went wrong while trying posting response to cloud");
                    });
            } catch(e) {
                console.error("Error in syncing: " + e.message);
            }
        }

        /*
        // listen for Online event
        $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
            var onlineState = networkState;
        })

        // listen for Offline event
        $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
            var offlineState = networkState;
        })*/

    };

}]);

app.controller('HomeTabCtrl', function($scope, $cordovaFile) {
    console.log('HomeTabCtrl');


 ionic.Platform.ready(function() {
     try {
//         $cordovaFile.checkFile(cordova.file.externalApplicationStorageDirectory, "responses.json")
         $cordovaFile.checkFile(cordova.file.externalApplicationStorageDirectory, "responses.json")
             .then(function (success) {
                 // success
                 console.log("responses.json was found");

             }, function (error) {
                 // error
                 console.log("error in finding responses.txt.. trying to create responses.json");
                 $cordovaFile.createFile(cordova.file.externalApplicationStorageDirectory, "responses.json", false)
                     .then(function (success) {
                         // success
                         console.log("responses.json was created");
                     }, function (error) {
                         // error
                         console.log("error in creating responses.json");
                     });
             });
     } catch(e){
         console.error("Error checking the file in file system: " + e.message);
     }
});

    /*
    $scope.airport = { "countLocalResponses": ''};

    var countLocalResponseData = function() {
        if(window.localStorage.getItem('responseData')) {
            console.log(JSON.parse(window.localStorage.getItem('responseData')).length);
            return JSON.parse(window.localStorage.getItem('responseData')).length;
        }
        return 0;
    }

    globals.countLocalResponses = countLocalResponseData();
    $scope.airport.countLocalResponses = globals.countLocalResponses;
    */
});

app.controller('IntroCtrl', ['$scope', '$timeout', '$cordovaFileTransfer' , function($scope, $timeout) {
    console.log('IntroCtrl');
/*
    document.addEventListener('deviceready', function () {

        var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
        var targetPath = cordova.file.documentsDirectory + "testImage.png";
        var trustHosts = true;
        var options = {};

        $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
            .then(function(result) {
                // Success!
                alert(targetPath + ">>>");
            }, function(err) {
                // Error
            }, function (progress) {
                $timeout(function () {
                    $scope.downloadProgress = (progress.loaded / progress.total) * 100;
                })
            });

    }, false);*/
}]);

app.factory('FlightDataService', function($q, $timeout) {

    var searchAirlines = function(searchFilter) {

        console.log('Searching airlines for ' + searchFilter);
        /*
        var choices = [];

        angular.forEach(airlines, function(airline) {
            var choice = {};
            choice.textEN = airline.name + ' (' + airline.iata + ')';
            choice.textAR = " اختيار",
            choice.value = airline.name + ' (' + airline.iata + ')';
            choice.notify = false;
            choice.goto = null;
            choices.push(choice);
        });

        console.log(choices);
        */

        var dxbResponses = [];

        var regNum = Math.floor((Math.random() * 1000000000) + 1);

        for(var i=0; i < 286; i++){


            var response = {};
            response.dateTaken = new Date() - 1;
            response.locationId = "5540acd6d80bd368de2f4bd3";//$scope.locationData._id;
            response.language = "en";
            response.totalTimeTaken = "";
            response.status = "complete";
            response.sourceOS = "";
            response.surveyId = "5540b163d80bd368de2f4bd5";//$scope.surveyData._id;
            response.brandId = "5540ac51d80bd368de2f4bd1";//$scope.locationData.brand._id;
            response.responses = [
                {
                    "data": [
                        {
                            "value": $rootScope.airport.regNumber,
                            "questionId": "5540b163d80bd368de2f4bdc",//$scope.surveyData.questions[0].survey[0]._id,
                            "timeTaken": new Date()
                        },
                        {
                            "value": $scope.favAirport,
                            "questionId": "5540b163d80bd368de2f4bd9",//$scope.surveyData.questions[0].survey[1]._id,
                            "timeTaken": new Date()
                        }
                    ],
                    "prompt": []
                }
            ];

        }

        var deferred = $q.defer();

        var matches = airlines.filter( function(airline) {

            if(airline.iata.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;

            if(airline.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;

            if(airline.city.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;

            if(airline.country.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;
        })

        $timeout( function(){

            deferred.resolve( matches );

        }, 100);

        return deferred.promise;

    };

    return {

        searchAirlines : searchAirlines

    }
});