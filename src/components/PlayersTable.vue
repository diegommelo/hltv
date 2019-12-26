<template>
    <div class="players-table">
        <b-table
            :data="players"
            :striped="true"
            :narrowed="true"
            :hoverable="true"
            :paginated="true"
            :selected.sync="selected"
            :per-page="perPage"
            :currente-page.sync="currentPage"
            :pagination-simple="true"
            :mobile-cards="false"
            @select="selectPlayer"
            :row-class ="(row,index) => chosen.includes(row.id) ===true && 'is-selected'"
        >
            <template slot-scope="props">
                <b-table-column field="country" label="" width=30 sortable>
                    <img class="image is-pulled-left flag-table" :src="props.row.country" />
                </b-table-column>                
                <b-table-column field="name" label="Player" width=90 searchable sortable>
                    {{props.row.name}}
                </b-table-column>
                <b-table-column field="team_name" label="Team" width=90 searchable sortable>
                    <img class="image is-pulled-left is-24x24 team-logo-table" :src="props.row.team_logo" /> {{props.row.team_name}}
                </b-table-column>
                <b-table-column field="rating" label="Rating" width=30 numeric sortable>
                    <span :class="[{'negative':isNegative(props.row.rating)},'rating']">{{props.row.rating.toFixed(2)}}</span>
                </b-table-column>                
                <b-table-column field="maps" label="Maps" width=30 numeric sortable>
                    {{props.row.maps}}
                </b-table-column>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
    name: 'PlayersTable',
    props: ['chosen'],
    methods: {
        selectPlayer(item){
            this.$emit('teste',item)
            this.$emit('close')
        },
        isNegative(rating){
            if(rating<1){
                return true
            } else {
                return false
            }
        }
    },
    data: function() {
        return {
            selected:{},
            currentPage:1,
            perPage:25,
            players:[
    {
        "name": "ZywOo",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 11893,
        "team_name": "Vitality",
        "team_logo": "https://static.hltv.org/images/team/logo/9565",
        "maps": 270,
        "rating": 1.32
    },
    {
        "name": "s1mple",
        "country": "https://static.hltv.org/images/bigflags/30x20/UA.gif",
        "id": 7998,
        "team_name": "Natus Vincere",
        "team_logo": "https://static.hltv.org/images/team/logo/4608",
        "maps": 141,
        "rating": 1.3
    },
    {
        "name": "sh1ro",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 16920,
        "team_name": "Gambit Youngsters",
        "team_logo": "https://static.hltv.org/images/team/logo/9976",
        "maps": 138,
        "rating": 1.27
    },
    {
        "name": "Kaze",
        "country": "https://static.hltv.org/images/bigflags/30x20/MY.gif",
        "id": 8950,
        "team_name": "ViCi",
        "team_logo": "https://static.hltv.org/images/team/logo/7606",
        "maps": 184,
        "rating": 1.26
    },
    {
        "name": "Jame",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 13776,
        "team_name": "AVANGAR",
        "team_logo": "https://static.hltv.org/images/team/logo/8120",
        "maps": 306,
        "rating": 1.26
    },
    {
        "name": "splashske",
        "country": "https://static.hltv.org/images/bigflags/30x20/SG.gif",
        "id": 8943,
        "team_name": "BOOT",
        "team_logo": "https://static.hltv.org/images/team/logo/6898",
        "maps": 148,
        "rating": 1.24
    },
    {
        "name": "Jamppi",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 14087,
        "team_name": "SJ",
        "team_logo": "https://static.hltv.org/images/team/logo/8504",
        "maps": 248,
        "rating": 1.23
    },
    {
        "name": "vsm",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 16816,
        "team_name": "DETONA",
        "team_logo": "https://static.hltv.org/images/team/logo/8902",
        "maps": 198,
        "rating": 1.22
    },
    {
        "name": "huNter-",
        "country": "https://static.hltv.org/images/bigflags/30x20/RS.gif",
        "id": 3972,
        "team_name": "G2",
        "team_logo": "https://static.hltv.org/images/team/logo/5995",
        "maps": 297,
        "rating": 1.22
    },
    {
        "name": "device",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 7592,
        "team_name": "Astralis",
        "team_logo": "https://static.hltv.org/images/team/logo/6665",
        "maps": 159,
        "rating": 1.22
    },
    {
        "name": "Sico",
        "country": "https://static.hltv.org/images/bigflags/30x20/NZ.gif",
        "id": 9102,
        "team_name": "Grayhound",
        "team_logo": "https://static.hltv.org/images/team/logo/8008",
        "maps": 193,
        "rating": 1.22
    },
    {
        "name": "dexter",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 9115,
        "team_name": "Grayhound",
        "team_logo": "https://static.hltv.org/images/team/logo/8008",
        "maps": 198,
        "rating": 1.22
    },
    {
        "name": "Benkai",
        "country": "https://static.hltv.org/images/bigflags/30x20/SG.gif",
        "id": 8944,
        "team_name": "BOOT",
        "team_logo": "https://static.hltv.org/images/team/logo/6898",
        "maps": 145,
        "rating": 1.21
    },
    {
        "name": "meyern",
        "country": "https://static.hltv.org/images/bigflags/30x20/AR.gif",
        "id": 14737,
        "team_name": "Isurus",
        "team_logo": "https://static.hltv.org/images/team/logo/7653",
        "maps": 148,
        "rating": 1.21
    },
    {
        "name": "electronic",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 8918,
        "team_name": "Natus Vincere",
        "team_logo": "https://static.hltv.org/images/team/logo/4608",
        "maps": 139,
        "rating": 1.21
    },
    {
        "name": "EliGE",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 8738,
        "team_name": "Liquid",
        "team_logo": "https://static.hltv.org/images/team/logo/5973",
        "maps": 223,
        "rating": 1.21
    },
    {
        "name": "xsepower",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 12733,
        "team_name": "forZe",
        "team_logo": "https://static.hltv.org/images/team/logo/8135",
        "maps": 366,
        "rating": 1.2
    },
    {
        "name": "INS",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 11140,
        "team_name": "ORDER",
        "team_logo": "https://static.hltv.org/images/team/logo/8668",
        "maps": 188,
        "rating": 1.2
    },
    {
        "name": "Hatz",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 11162,
        "team_name": "ORDER",
        "team_logo": "https://static.hltv.org/images/team/logo/8668",
        "maps": 185,
        "rating": 1.2
    },
    {
        "name": "aliStair",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 11139,
        "team_name": "ORDER",
        "team_logo": "https://static.hltv.org/images/team/logo/8668",
        "maps": 185,
        "rating": 1.19
    },
    {
        "name": "mantuu",
        "country": "https://static.hltv.org/images/bigflags/30x20/GB.gif",
        "id": 10981,
        "team_name": "ALTERNATE aTTaX",
        "team_logo": "https://static.hltv.org/images/team/logo/4501",
        "maps": 188,
        "rating": 1.19
    },
    {
        "name": "BnTeT",
        "country": "https://static.hltv.org/images/bigflags/30x20/ID.gif",
        "id": 7131,
        "team_name": "TYLOO",
        "team_logo": "https://static.hltv.org/images/team/logo/4863",
        "maps": 240,
        "rating": 1.19
    },
    {
        "name": "ropz",
        "country": "https://static.hltv.org/images/bigflags/30x20/EE.gif",
        "id": 11816,
        "team_name": "mousesports",
        "team_logo": "https://static.hltv.org/images/team/logo/4494",
        "maps": 200,
        "rating": 1.19
    },
    {
        "name": "floppy",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 12713,
        "team_name": "ATK",
        "team_logo": "https://static.hltv.org/images/team/logo/9943",
        "maps": 266,
        "rating": 1.19
    },
    {
        "name": "KSCERATO",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 15631,
        "team_name": "FURIA",
        "team_logo": "https://static.hltv.org/images/team/logo/8297",
        "maps": 281,
        "rating": 1.19
    },
    {
        "name": "PTC",
        "country": "https://static.hltv.org/images/bigflags/30x20/TH.gif",
        "id": 13238,
        "team_name": "Lucid Dream",
        "team_logo": "https://static.hltv.org/images/team/logo/8680",
        "maps": 148,
        "rating": 1.18
    },
    {
        "name": "Brehze",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 9136,
        "team_name": "Evil Geniuses",
        "team_logo": "https://static.hltv.org/images/team/logo/10399",
        "maps": 224,
        "rating": 1.18
    },
    {
        "name": "d4v41",
        "country": "https://static.hltv.org/images/bigflags/30x20/MY.gif",
        "id": 13476,
        "team_name": "BOOT",
        "team_logo": "https://static.hltv.org/images/team/logo/6898",
        "maps": 150,
        "rating": 1.18
    },
    {
        "name": "blameF",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 15165,
        "team_name": "Complexity",
        "team_logo": "https://static.hltv.org/images/team/logo/5005",
        "maps": 175,
        "rating": 1.18
    },
    {
        "name": "Bubzkji",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 9612,
        "team_name": "Tricked",
        "team_logo": "https://static.hltv.org/images/team/logo/4602",
        "maps": 278,
        "rating": 1.18
    },
    {
        "name": "NAF",
        "country": "https://static.hltv.org/images/bigflags/30x20/CA.gif",
        "id": 8520,
        "team_name": "Liquid",
        "team_logo": "https://static.hltv.org/images/team/logo/5973",
        "maps": 222,
        "rating": 1.18
    },
    {
        "name": "yuurih",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 12553,
        "team_name": "FURIA",
        "team_logo": "https://static.hltv.org/images/team/logo/8297",
        "maps": 281,
        "rating": 1.17
    },
    {
        "name": "roeJ",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 14419,
        "team_name": "Copenhagen Flames",
        "team_logo": "https://static.hltv.org/images/team/logo/7461",
        "maps": 245,
        "rating": 1.17
    },
    {
        "name": "ZOREE",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 8576,
        "team_name": "HAVU",
        "team_logo": "https://static.hltv.org/images/team/logo/7865",
        "maps": 359,
        "rating": 1.17
    },
    {
        "name": "erkaSt",
        "country": "https://static.hltv.org/images/bigflags/30x20/MN.gif",
        "id": 11141,
        "team_name": "AUGUST",
        "team_logo": "https://static.hltv.org/images/team/logo/10328",
        "maps": 149,
        "rating": 1.17
    },
    {
        "name": "SLOWLY",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 15683,
        "team_name": "EHOME",
        "team_logo": "https://static.hltv.org/images/team/logo/7024",
        "maps": 134,
        "rating": 1.17
    },
    {
        "name": "Magisk",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 9032,
        "team_name": "Astralis",
        "team_logo": "https://static.hltv.org/images/team/logo/6665",
        "maps": 159,
        "rating": 1.17
    },
    {
        "name": "Infinite",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 14619,
        "team_name": "Lazarus",
        "team_logo": "https://static.hltv.org/images/team/logo/9945",
        "maps": 147,
        "rating": 1.17
    },
    {
        "name": "degster",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 17306,
        "team_name": "Espada",
        "team_logo": "https://static.hltv.org/images/team/logo/8669",
        "maps": 115,
        "rating": 1.17
    },
    {
        "name": "dycha",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 16080,
        "team_name": "Aristocracy",
        "team_logo": "https://static.hltv.org/images/team/logo/10020",
        "maps": 193,
        "rating": 1.17
    },
    {
        "name": "poizon",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 12126,
        "team_name": "Windigo",
        "team_logo": "https://static.hltv.org/images/team/logo/8513",
        "maps": 242,
        "rating": 1.16
    },
    {
        "name": "frozen",
        "country": "https://static.hltv.org/images/bigflags/30x20/SK.gif",
        "id": 9960,
        "team_name": "mousesports",
        "team_logo": "https://static.hltv.org/images/team/logo/4494",
        "maps": 276,
        "rating": 1.16
    },
    {
        "name": "Olivia",
        "country": "https://static.hltv.org/images/bigflags/30x20/TH.gif",
        "id": 10664,
        "team_name": "Alpha Red",
        "team_logo": "https://static.hltv.org/images/team/logo/8848",
        "maps": 162,
        "rating": 1.16
    },
    {
        "name": "Texta",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 11847,
        "team_name": "Chiefs",
        "team_logo": "https://static.hltv.org/images/team/logo/6010",
        "maps": 181,
        "rating": 1.16
    },
    {
        "name": "woxic",
        "country": "https://static.hltv.org/images/bigflags/30x20/TR.gif",
        "id": 8574,
        "team_name": "mousesports",
        "team_logo": "https://static.hltv.org/images/team/logo/4494",
        "maps": 201,
        "rating": 1.16
    },
    {
        "name": "syrsoN",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 7266,
        "team_name": "Sprout",
        "team_logo": "https://static.hltv.org/images/team/logo/8637",
        "maps": 311,
        "rating": 1.16
    },
    {
        "name": "V4D1M",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 11580,
        "team_name": "Invictus",
        "team_logo": "https://static.hltv.org/images/team/logo/7966",
        "maps": 140,
        "rating": 1.16
    },
    {
        "name": "NiKo",
        "country": "https://static.hltv.org/images/bigflags/30x20/BA.gif",
        "id": 3741,
        "team_name": "FaZe",
        "team_logo": "https://static.hltv.org/images/team/logo/6667",
        "maps": 165,
        "rating": 1.16
    },
    {
        "name": "biguzera",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 18141,
        "team_name": "paiN",
        "team_logo": "https://static.hltv.org/images/team/logo/4773",
        "maps": 169,
        "rating": 1.16
    },
    {
        "name": "jks",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 4679,
        "team_name": "100 Thieves",
        "team_logo": "https://static.hltv.org/images/team/logo/8474",
        "maps": 148,
        "rating": 1.16
    },
    {
        "name": "hardzao",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 16817,
        "team_name": "paiN",
        "team_logo": "https://static.hltv.org/images/team/logo/4773",
        "maps": 163,
        "rating": 1.16
    },
    {
        "name": "ofnu",
        "country": "https://static.hltv.org/images/bigflags/30x20/NZ.gif",
        "id": 8767,
        "team_name": "Chiefs",
        "team_logo": "https://static.hltv.org/images/team/logo/6010",
        "maps": 175,
        "rating": 1.16
    },
    {
        "name": "ptr",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 8707,
        "team_name": "Riot Squad",
        "team_logo": "https://static.hltv.org/images/team/logo/10164",
        "maps": 185,
        "rating": 1.16
    },
    {
        "name": "somedieyoung",
        "country": "https://static.hltv.org/images/bigflags/30x20/UA.gif",
        "id": 12731,
        "team_name": "Spirit",
        "team_logo": "https://static.hltv.org/images/team/logo/7020",
        "maps": 228,
        "rating": 1.15
    },
    {
        "name": "TenZ",
        "country": "https://static.hltv.org/images/bigflags/30x20/CA.gif",
        "id": 13254,
        "team_name": "Bad News Bears",
        "team_logo": "https://static.hltv.org/images/team/logo/9799",
        "maps": 149,
        "rating": 1.15
    },
    {
        "name": "trk",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 11163,
        "team_name": "TeamOne",
        "team_logo": "https://static.hltv.org/images/team/logo/6947",
        "maps": 150,
        "rating": 1.15
    },
    {
        "name": "hallzerk",
        "country": "https://static.hltv.org/images/bigflags/30x20/NO.gif",
        "id": 12840,
        "team_name": "Nordavind",
        "team_logo": "https://static.hltv.org/images/team/logo/8769",
        "maps": 149,
        "rating": 1.15
    },
    {
        "name": "nexa",
        "country": "https://static.hltv.org/images/bigflags/30x20/RS.gif",
        "id": 9618,
        "team_name": "G2",
        "team_logo": "https://static.hltv.org/images/team/logo/5995",
        "maps": 297,
        "rating": 1.15
    },
    {
        "name": "coldzera",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 9216,
        "team_name": "FaZe",
        "team_logo": "https://static.hltv.org/images/team/logo/6667",
        "maps": 149,
        "rating": 1.15
    },
    {
        "name": "crashies",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13278,
        "team_name": "Riot Squad",
        "team_logo": "https://static.hltv.org/images/team/logo/10164",
        "maps": 150,
        "rating": 1.15
    },
    {
        "name": "pancc",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 16314,
        "team_name": "W7M",
        "team_logo": "https://static.hltv.org/images/team/logo/8574",
        "maps": 176,
        "rating": 1.15
    },
    {
        "name": "HaZR",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 14294,
        "team_name": "AVANT",
        "team_logo": "https://static.hltv.org/images/team/logo/5293",
        "maps": 132,
        "rating": 1.14
    },
    {
        "name": "moose",
        "country": "https://static.hltv.org/images/bigflags/30x20/CA.gif",
        "id": 12271,
        "team_name": "eUnited",
        "team_logo": "https://static.hltv.org/images/team/logo/7106",
        "maps": 121,
        "rating": 1.14
    },
    {
        "name": "tabseN",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 5794,
        "team_name": "BIG",
        "team_logo": "https://static.hltv.org/images/team/logo/7532",
        "maps": 192,
        "rating": 1.14
    },
    {
        "name": "rallen",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 5388,
        "team_name": "ARCY",
        "team_logo": "https://static.hltv.org/images/team/logo/10494",
        "maps": 205,
        "rating": 1.14
    },
    {
        "name": "FREDDyFROG",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 9277,
        "team_name": "Chaos",
        "team_logo": "https://static.hltv.org/images/team/logo/9085",
        "maps": 296,
        "rating": 1.14
    },
    {
        "name": "kennyS",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 7167,
        "team_name": "G2",
        "team_logo": "https://static.hltv.org/images/team/logo/5995",
        "maps": 246,
        "rating": 1.14
    },
    {
        "name": "shz",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 11739,
        "team_name": "INTZ",
        "team_logo": "https://static.hltv.org/images/team/logo/6619",
        "maps": 169,
        "rating": 1.14
    },
    {
        "name": "Koshak",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 11133,
        "team_name": "Invictus",
        "team_logo": "https://static.hltv.org/images/team/logo/7966",
        "maps": 132,
        "rating": 1.14
    },
    {
        "name": "Twistzz",
        "country": "https://static.hltv.org/images/bigflags/30x20/CA.gif",
        "id": 10394,
        "team_name": "Liquid",
        "team_logo": "https://static.hltv.org/images/team/logo/5973",
        "maps": 223,
        "rating": 1.14
    },
    {
        "name": "wrath",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 9884,
        "team_name": "New Identity",
        "team_logo": "https://static.hltv.org/images/team/logo/10080",
        "maps": 152,
        "rating": 1.14
    },
    {
        "name": "XANTARES",
        "country": "https://static.hltv.org/images/bigflags/30x20/TR.gif",
        "id": 7938,
        "team_name": "BIG",
        "team_logo": "https://static.hltv.org/images/team/logo/7532",
        "maps": 184,
        "rating": 1.14
    },
    {
        "name": "nawwk",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 13670,
        "team_name": "GamerLegion",
        "team_logo": "https://static.hltv.org/images/team/logo/9928",
        "maps": 326,
        "rating": 1.13
    },
    {
        "name": "somebody",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 8605,
        "team_name": "TYLOO",
        "team_logo": "https://static.hltv.org/images/team/logo/4863",
        "maps": 244,
        "rating": 1.13
    },
    {
        "name": "TENZKI",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 5287,
        "team_name": "Nordavind",
        "team_logo": "https://static.hltv.org/images/team/logo/8769",
        "maps": 155,
        "rating": 1.13
    },
    {
        "name": "Ethan",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 10671,
        "team_name": "Evil Geniuses",
        "team_logo": "https://static.hltv.org/images/team/logo/10399",
        "maps": 229,
        "rating": 1.13
    },
    {
        "name": "CeRq",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 11219,
        "team_name": "Evil Geniuses",
        "team_logo": "https://static.hltv.org/images/team/logo/10399",
        "maps": 228,
        "rating": 1.13
    },
    {
        "name": "lollipop21k",
        "country": "https://static.hltv.org/images/bigflags/30x20/BY.gif",
        "id": 13980,
        "team_name": "Nemiga",
        "team_logo": "https://static.hltv.org/images/team/logo/7969",
        "maps": 326,
        "rating": 1.13
    },
    {
        "name": "smooya",
        "country": "https://static.hltv.org/images/bigflags/30x20/GB.gif",
        "id": 11271,
        "team_name": "BIG",
        "team_logo": "https://static.hltv.org/images/team/logo/7532",
        "maps": 164,
        "rating": 1.13
    },
    {
        "name": "mixwell",
        "country": "https://static.hltv.org/images/bigflags/30x20/ES.gif",
        "id": 8370,
        "team_name": "Movistar Riders",
        "team_logo": "https://static.hltv.org/images/team/logo/7718",
        "maps": 170,
        "rating": 1.13
    },
    {
        "name": "Maden",
        "country": "https://static.hltv.org/images/bigflags/30x20/RS.gif",
        "id": 11777,
        "team_name": "GODSENT",
        "team_logo": "https://static.hltv.org/images/team/logo/6902",
        "maps": 210,
        "rating": 1.13
    },
    {
        "name": "MarKE",
        "country": "https://static.hltv.org/images/bigflags/30x20/MX.gif",
        "id": 10892,
        "team_name": "eUnited",
        "team_logo": "https://static.hltv.org/images/team/logo/7106",
        "maps": 148,
        "rating": 1.13
    },
    {
        "name": "sergej",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 11916,
        "team_name": "ENCE",
        "team_logo": "https://static.hltv.org/images/team/logo/4869",
        "maps": 168,
        "rating": 1.13
    },
    {
        "name": "dennyslaw",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 13466,
        "team_name": "SKADE",
        "team_logo": "https://static.hltv.org/images/team/logo/10386",
        "maps": 133,
        "rating": 1.13
    },
    {
        "name": "acoR",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 10330,
        "team_name": "Tricked",
        "team_logo": "https://static.hltv.org/images/team/logo/4602",
        "maps": 344,
        "rating": 1.12
    },
    {
        "name": "ottoNd",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 11283,
        "team_name": "CR4ZY",
        "team_logo": "https://static.hltv.org/images/team/logo/10150",
        "maps": 281,
        "rating": 1.12
    },
    {
        "name": "Plopski",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 14218,
        "team_name": "NiP",
        "team_logo": "https://static.hltv.org/images/team/logo/4411",
        "maps": 268,
        "rating": 1.12
    },
    {
        "name": "motm",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13230,
        "team_name": "ATK",
        "team_logo": "https://static.hltv.org/images/team/logo/9943",
        "maps": 217,
        "rating": 1.12
    },
    {
        "name": "kNgV-",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 5736,
        "team_name": "MIBR",
        "team_logo": "https://static.hltv.org/images/team/logo/9215",
        "maps": 200,
        "rating": 1.12
    },
    {
        "name": "qikert",
        "country": "https://static.hltv.org/images/bigflags/30x20/KZ.gif",
        "id": 13239,
        "team_name": "AVANGAR",
        "team_logo": "https://static.hltv.org/images/team/logo/8120",
        "maps": 305,
        "rating": 1.12
    },
    {
        "name": "Farlig",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 13300,
        "team_name": "Copenhagen Flames",
        "team_logo": "https://static.hltv.org/images/team/logo/7461",
        "maps": 249,
        "rating": 1.12
    },
    {
        "name": "xCeeD",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13182,
        "team_name": "Triumph",
        "team_logo": "https://static.hltv.org/images/team/logo/10304",
        "maps": 139,
        "rating": 1.12
    },
    {
        "name": "Kntz",
        "country": "https://static.hltv.org/images/bigflags/30x20/TH.gif",
        "id": 10705,
        "team_name": "Alpha Red",
        "team_logo": "https://static.hltv.org/images/team/logo/8848",
        "maps": 153,
        "rating": 1.12
    },
    {
        "name": "stavn",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 10994,
        "team_name": "Heroic",
        "team_logo": "https://static.hltv.org/images/team/logo/7175",
        "maps": 238,
        "rating": 1.12
    },
    {
        "name": "dupreeh",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 7398,
        "team_name": "Astralis",
        "team_logo": "https://static.hltv.org/images/team/logo/6665",
        "maps": 159,
        "rating": 1.12
    },
    {
        "name": "El1an",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 13281,
        "team_name": "Winstrike",
        "team_logo": "https://static.hltv.org/images/team/logo/9183",
        "maps": 135,
        "rating": 1.12
    },
    {
        "name": "nukkye",
        "country": "https://static.hltv.org/images/bigflags/30x20/LT.gif",
        "id": 13679,
        "team_name": "HellRaisers",
        "team_logo": "https://static.hltv.org/images/team/logo/5310",
        "maps": 230,
        "rating": 1.12
    },
    {
        "name": "Sonic",
        "country": "https://static.hltv.org/images/bigflags/30x20/ZA.gif",
        "id": 8711,
        "team_name": "ATK",
        "team_logo": "https://static.hltv.org/images/team/logo/9943",
        "maps": 193,
        "rating": 1.12
    },
    {
        "name": "Thomas",
        "country": "https://static.hltv.org/images/bigflags/30x20/GB.gif",
        "id": 13018,
        "team_name": "Phoenix",
        "team_logo": "https://static.hltv.org/images/team/logo/10420",
        "maps": 178,
        "rating": 1.12
    },
    {
        "name": "oSee",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13249,
        "team_name": "ATK",
        "team_logo": "https://static.hltv.org/images/team/logo/9943",
        "maps": 266,
        "rating": 1.12
    },
    {
        "name": "Brollan",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 13666,
        "team_name": "fnatic",
        "team_logo": "https://static.hltv.org/images/team/logo/4991",
        "maps": 206,
        "rating": 1.12
    },
    {
        "name": "allu",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 695,
        "team_name": "ENCE",
        "team_logo": "https://static.hltv.org/images/team/logo/4869",
        "maps": 167,
        "rating": 1.12
    },
    {
        "name": "zeph",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 13054,
        "team_name": "Ground Zero",
        "team_logo": "https://static.hltv.org/images/team/logo/8536",
        "maps": 163,
        "rating": 1.12
    },
    {
        "name": "jkaem",
        "country": "https://static.hltv.org/images/bigflags/30x20/NO.gif",
        "id": 8248,
        "team_name": "100 Thieves",
        "team_logo": "https://static.hltv.org/images/team/logo/8474",
        "maps": 145,
        "rating": 1.12
    },
    {
        "name": "Xyp9x",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 4954,
        "team_name": "Astralis",
        "team_logo": "https://static.hltv.org/images/team/logo/6665",
        "maps": 159,
        "rating": 1.12
    },
    {
        "name": "hAdji",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 9656,
        "team_name": "3DMAX",
        "team_logo": "https://static.hltv.org/images/team/logo/4914",
        "maps": 195,
        "rating": 1.12
    },
    {
        "name": "boltz",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 8568,
        "team_name": "INTZ",
        "team_logo": "https://static.hltv.org/images/team/logo/6619",
        "maps": 142,
        "rating": 1.11
    },
    {
        "name": "Noktse",
        "country": "https://static.hltv.org/images/bigflags/30x20/AR.gif",
        "id": 2161,
        "team_name": "Isurus",
        "team_logo": "https://static.hltv.org/images/team/logo/7653",
        "maps": 131,
        "rating": 1.11
    },
    {
        "name": "Summer",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 7028,
        "team_name": "TYLOO",
        "team_logo": "https://static.hltv.org/images/team/logo/4863",
        "maps": 243,
        "rating": 1.11
    },
    {
        "name": "PKL",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 6593,
        "team_name": "paiN",
        "team_logo": "https://static.hltv.org/images/team/logo/4773",
        "maps": 169,
        "rating": 1.11
    },
    {
        "name": "Subroza",
        "country": "https://static.hltv.org/images/bigflags/30x20/CA.gif",
        "id": 11231,
        "team_name": "Lazarus",
        "team_logo": "https://static.hltv.org/images/team/logo/9945",
        "maps": 142,
        "rating": 1.11
    },
    {
        "name": "Cooper-",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 15007,
        "team_name": "eUnited",
        "team_logo": "https://static.hltv.org/images/team/logo/7106",
        "maps": 152,
        "rating": 1.11
    },
    {
        "name": "zemp",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 12999,
        "team_name": "Ground Zero",
        "team_logo": "https://static.hltv.org/images/team/logo/8536",
        "maps": 122,
        "rating": 1.11
    },
    {
        "name": "MAIROLLS",
        "country": "https://static.hltv.org/images/bigflags/30x20/TH.gif",
        "id": 10666,
        "team_name": "Alpha Red",
        "team_logo": "https://static.hltv.org/images/team/logo/8848",
        "maps": 159,
        "rating": 1.11
    },
    {
        "name": "Lack1",
        "country": "https://static.hltv.org/images/bigflags/30x20/KZ.gif",
        "id": 13240,
        "team_name": "Winstrike",
        "team_logo": "https://static.hltv.org/images/team/logo/9183",
        "maps": 122,
        "rating": 1.11
    },
    {
        "name": "mitch",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 10470,
        "team_name": "Riot Squad",
        "team_logo": "https://static.hltv.org/images/team/logo/10164",
        "maps": 177,
        "rating": 1.11
    },
    {
        "name": "b0RUP",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 9896,
        "team_name": "Heroic",
        "team_logo": "https://static.hltv.org/images/team/logo/7175",
        "maps": 349,
        "rating": 1.11
    },
    {
        "name": "CRUC1AL",
        "country": "https://static.hltv.org/images/bigflags/30x20/NL.gif",
        "id": 7996,
        "team_name": "Phoenix",
        "team_logo": "https://static.hltv.org/images/team/logo/10420",
        "maps": 288,
        "rating": 1.11
    },
    {
        "name": "YEKINDAR",
        "country": "https://static.hltv.org/images/bigflags/30x20/LV.gif",
        "id": 13915,
        "team_name": "pro100",
        "team_logo": "https://static.hltv.org/images/team/logo/7898",
        "maps": 257,
        "rating": 1.11
    },
    {
        "name": "iDISBALANCE",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 14273,
        "team_name": "Spirit",
        "team_logo": "https://static.hltv.org/images/team/logo/7020",
        "maps": 232,
        "rating": 1.11
    },
    {
        "name": "draken",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 9255,
        "team_name": "Ancient",
        "team_logo": "https://static.hltv.org/images/team/logo/6685",
        "maps": 224,
        "rating": 1.11
    },
    {
        "name": "valde",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 9031,
        "team_name": "North",
        "team_logo": "https://static.hltv.org/images/team/logo/7533",
        "maps": 141,
        "rating": 1.11
    },
    {
        "name": "fer",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 8564,
        "team_name": "MIBR",
        "team_logo": "https://static.hltv.org/images/team/logo/9215",
        "maps": 187,
        "rating": 1.11
    },
    {
        "name": "dEE",
        "country": "https://static.hltv.org/images/bigflags/30x20/RS.gif",
        "id": 4576,
        "team_name": "Juggernauts",
        "team_logo": "https://static.hltv.org/images/team/logo/10509",
        "maps": 120,
        "rating": 1.11
    },
    {
        "name": "SHiPZ",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 11343,
        "team_name": "CR4ZY",
        "team_logo": "https://static.hltv.org/images/team/logo/10150",
        "maps": 278,
        "rating": 1.11
    },
    {
        "name": "PwnAlone",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 15090,
        "team_name": "Party Astronauts",
        "team_logo": "https://static.hltv.org/images/team/logo/8038",
        "maps": 157,
        "rating": 1.11
    },
    {
        "name": "FL1T",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 12732,
        "team_name": "forZe",
        "team_logo": "https://static.hltv.org/images/team/logo/8135",
        "maps": 366,
        "rating": 1.1
    },
    {
        "name": "MICHU",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 7356,
        "team_name": "Virtus.pro",
        "team_logo": "https://static.hltv.org/images/team/logo/5378",
        "maps": 265,
        "rating": 1.1
    },
    {
        "name": "Jonji",
        "country": "https://static.hltv.org/images/bigflags/30x20/CA.gif",
        "id": 12113,
        "team_name": "Riot Squad",
        "team_logo": "https://static.hltv.org/images/team/logo/10164",
        "maps": 169,
        "rating": 1.1
    },
    {
        "name": "Voltage",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13228,
        "team_name": "Triumph",
        "team_logo": "https://static.hltv.org/images/team/logo/10304",
        "maps": 131,
        "rating": 1.1
    },
    {
        "name": "KRIMZ",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 7528,
        "team_name": "fnatic",
        "team_logo": "https://static.hltv.org/images/team/logo/4991",
        "maps": 196,
        "rating": 1.1
    },
    {
        "name": "DeStRoYeR",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 10192,
        "team_name": "EHOME",
        "team_logo": "https://static.hltv.org/images/team/logo/7024",
        "maps": 134,
        "rating": 1.1
    },
    {
        "name": "cbbk",
        "country": "https://static.hltv.org/images/bigflags/30x20/TH.gif",
        "id": 10764,
        "team_name": "Lucid Dream",
        "team_logo": "https://static.hltv.org/images/team/logo/8680",
        "maps": 148,
        "rating": 1.1
    },
    {
        "name": "xccurate",
        "country": "https://static.hltv.org/images/bigflags/30x20/ID.gif",
        "id": 10263,
        "team_name": "BTRG",
        "team_logo": "https://static.hltv.org/images/team/logo/9107",
        "maps": 127,
        "rating": 1.1
    },
    {
        "name": "JohnOlsen",
        "country": "https://static.hltv.org/images/bigflags/30x20/TH.gif",
        "id": 16911,
        "team_name": "Lucid Dream",
        "team_logo": "https://static.hltv.org/images/team/logo/8680",
        "maps": 124,
        "rating": 1.1
    },
    {
        "name": "Davidp",
        "country": "https://static.hltv.org/images/bigflags/30x20/BE.gif",
        "id": 8138,
        "team_name": "Heretics",
        "team_logo": "https://static.hltv.org/images/team/logo/8346",
        "maps": 364,
        "rating": 1.1
    },
    {
        "name": "zehN",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 1378,
        "team_name": "GODSENT",
        "team_logo": "https://static.hltv.org/images/team/logo/6902",
        "maps": 228,
        "rating": 1.1
    },
    {
        "name": "FalleN",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 2023,
        "team_name": "MIBR",
        "team_logo": "https://static.hltv.org/images/team/logo/9215",
        "maps": 191,
        "rating": 1.1
    },
    {
        "name": "HEN1",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 8565,
        "team_name": "FURIA",
        "team_logo": "https://static.hltv.org/images/team/logo/8297",
        "maps": 160,
        "rating": 1.1
    },
    {
        "name": "Grim",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13578,
        "team_name": "Triumph",
        "team_logo": "https://static.hltv.org/images/team/logo/10304",
        "maps": 143,
        "rating": 1.1
    },
    {
        "name": "Noobster",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 9680,
        "team_name": "Ground Zero",
        "team_logo": "https://static.hltv.org/images/team/logo/8536",
        "maps": 135,
        "rating": 1.1
    },
    {
        "name": "k1to",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 12781,
        "team_name": "Sprout",
        "team_logo": "https://static.hltv.org/images/team/logo/8637",
        "maps": 295,
        "rating": 1.1
    },
    {
        "name": "mawth",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 10838,
        "team_name": "Falkol",
        "team_logo": "https://static.hltv.org/images/team/logo/10028",
        "maps": 116,
        "rating": 1.09
    },
    {
        "name": "STOMP",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 12699,
        "team_name": "Illuminar",
        "team_logo": "https://static.hltv.org/images/team/logo/8813",
        "maps": 301,
        "rating": 1.09
    },
    {
        "name": "ALEX",
        "country": "https://static.hltv.org/images/bigflags/30x20/ES.gif",
        "id": 8371,
        "team_name": "Movistar Riders",
        "team_logo": "https://static.hltv.org/images/team/logo/7718",
        "maps": 275,
        "rating": 1.09
    },
    {
        "name": "aumaN",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 8604,
        "team_name": "ViCi",
        "team_logo": "https://static.hltv.org/images/team/logo/7606",
        "maps": 187,
        "rating": 1.09
    },
    {
        "name": "stat",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 12086,
        "team_name": "Genuine",
        "team_logo": "https://static.hltv.org/images/team/logo/9747",
        "maps": 163,
        "rating": 1.09
    },
    {
        "name": "k0nfig",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 9078,
        "team_name": "OpTic",
        "team_logo": "https://static.hltv.org/images/team/logo/6615",
        "maps": 147,
        "rating": 1.09
    },
    {
        "name": "f0rest",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 29,
        "team_name": "NiP",
        "team_logo": "https://static.hltv.org/images/team/logo/4411",
        "maps": 184,
        "rating": 1.09
    },
    {
        "name": "tatazin",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 10840,
        "team_name": "paiN",
        "team_logo": "https://static.hltv.org/images/team/logo/4773",
        "maps": 163,
        "rating": 1.09
    },
    {
        "name": "STYKO",
        "country": "https://static.hltv.org/images/bigflags/30x20/SK.gif",
        "id": 6904,
        "team_name": "GODSENT",
        "team_logo": "https://static.hltv.org/images/team/logo/6902",
        "maps": 200,
        "rating": 1.09
    },
    {
        "name": "flying",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 16872,
        "team_name": "Invictus",
        "team_logo": "https://static.hltv.org/images/team/logo/7966",
        "maps": 141,
        "rating": 1.09
    },
    {
        "name": "Xeppaa",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 15839,
        "team_name": "Rap Gang",
        "team_logo": "https://static.hltv.org/images/team/logo/10261",
        "maps": 117,
        "rating": 1.09
    },
    {
        "name": "hoody",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 13396,
        "team_name": "HAVU",
        "team_logo": "https://static.hltv.org/images/team/logo/7865",
        "maps": 343,
        "rating": 1.09
    },
    {
        "name": "buster",
        "country": "https://static.hltv.org/images/bigflags/30x20/KZ.gif",
        "id": 11942,
        "team_name": "AVANGAR",
        "team_logo": "https://static.hltv.org/images/team/logo/8120",
        "maps": 305,
        "rating": 1.09
    },
    {
        "name": "arT",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 12521,
        "team_name": "FURIA",
        "team_logo": "https://static.hltv.org/images/team/logo/8297",
        "maps": 281,
        "rating": 1.09
    },
    {
        "name": "Valiance",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 16323,
        "team_name": "ORDER",
        "team_logo": "https://static.hltv.org/images/team/logo/8668",
        "maps": 165,
        "rating": 1.09
    },
    {
        "name": "BL1TZ",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 12715,
        "team_name": "Chiefs",
        "team_logo": "https://static.hltv.org/images/team/logo/6010",
        "maps": 181,
        "rating": 1.09
    },
    {
        "name": "refrezh",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 10610,
        "team_name": "OpTic",
        "team_logo": "https://static.hltv.org/images/team/logo/6615",
        "maps": 161,
        "rating": 1.09
    },
    {
        "name": "almazer",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 11654,
        "team_name": "forZe",
        "team_logo": "https://static.hltv.org/images/team/logo/8135",
        "maps": 364,
        "rating": 1.09
    },
    {
        "name": "Flarich",
        "country": "https://static.hltv.org/images/bigflags/30x20/LV.gif",
        "id": 11250,
        "team_name": "HellRaisers",
        "team_logo": "https://static.hltv.org/images/team/logo/5310",
        "maps": 213,
        "rating": 1.09
    },
    {
        "name": "facecrack",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 8726,
        "team_name": "forZe",
        "team_logo": "https://static.hltv.org/images/team/logo/8135",
        "maps": 366,
        "rating": 1.09
    },
    {
        "name": "Jyo",
        "country": "https://static.hltv.org/images/bigflags/30x20/EE.gif",
        "id": 12269,
        "team_name": "Nemiga",
        "team_logo": "https://static.hltv.org/images/team/logo/7969",
        "maps": 317,
        "rating": 1.08
    },
    {
        "name": "Freeman",
        "country": "https://static.hltv.org/images/bigflags/30x20/HK.gif",
        "id": 10774,
        "team_name": "TYLOO",
        "team_logo": "https://static.hltv.org/images/team/logo/4863",
        "maps": 235,
        "rating": 1.08
    },
    {
        "name": "Maka",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 13138,
        "team_name": "Heretics",
        "team_logo": "https://static.hltv.org/images/team/logo/8346",
        "maps": 364,
        "rating": 1.08
    },
    {
        "name": "zewsy",
        "country": "https://static.hltv.org/images/bigflags/30x20/NZ.gif",
        "id": 8764,
        "team_name": "Chiefs",
        "team_logo": "https://static.hltv.org/images/team/logo/6010",
        "maps": 166,
        "rating": 1.08
    },
    {
        "name": "autimatic",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 8735,
        "team_name": "Cloud9",
        "team_logo": "https://static.hltv.org/images/team/logo/5752",
        "maps": 122,
        "rating": 1.08
    },
    {
        "name": "xand",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 9218,
        "team_name": "INTZ",
        "team_logo": "https://static.hltv.org/images/team/logo/6619",
        "maps": 193,
        "rating": 1.08
    },
    {
        "name": "Boombl4",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 11840,
        "team_name": "Natus Vincere",
        "team_logo": "https://static.hltv.org/images/team/logo/4608",
        "maps": 204,
        "rating": 1.08
    },
    {
        "name": "PlesseN",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 9811,
        "team_name": "Chaos",
        "team_logo": "https://static.hltv.org/images/team/logo/9085",
        "maps": 268,
        "rating": 1.08
    },
    {
        "name": "Kjaerbye",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 8394,
        "team_name": "North",
        "team_logo": "https://static.hltv.org/images/team/logo/7533",
        "maps": 182,
        "rating": 1.08
    },
    {
        "name": "sLowi",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 9271,
        "team_name": "HAVU",
        "team_logo": "https://static.hltv.org/images/team/logo/7865",
        "maps": 349,
        "rating": 1.08
    },
    {
        "name": "tucks",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 9108,
        "team_name": "Chiefs",
        "team_logo": "https://static.hltv.org/images/team/logo/6010",
        "maps": 180,
        "rating": 1.08
    },
    {
        "name": "Maluk3",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 2529,
        "team_name": "TeamOne",
        "team_logo": "https://static.hltv.org/images/team/logo/6947",
        "maps": 150,
        "rating": 1.08
    },
    {
        "name": "zhokiNg",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 8601,
        "team_name": "ViCi",
        "team_logo": "https://static.hltv.org/images/team/logo/7606",
        "maps": 189,
        "rating": 1.08
    },
    {
        "name": "sjuush",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 14148,
        "team_name": "Tricked",
        "team_logo": "https://static.hltv.org/images/team/logo/4602",
        "maps": 317,
        "rating": 1.08
    },
    {
        "name": "NEEX",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 8543,
        "team_name": "Izako Boars",
        "team_logo": "https://static.hltv.org/images/team/logo/7681",
        "maps": 166,
        "rating": 1.08
    },
    {
        "name": "hampus",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 9766,
        "team_name": "GamerLegion",
        "team_logo": "https://static.hltv.org/images/team/logo/9928",
        "maps": 288,
        "rating": 1.08
    },
    {
        "name": "ryann",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 12088,
        "team_name": "Envy",
        "team_logo": "https://static.hltv.org/images/team/logo/5991",
        "maps": 223,
        "rating": 1.08
    },
    {
        "name": "faveN",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 14932,
        "team_name": "Sprout",
        "team_logo": "https://static.hltv.org/images/team/logo/8637",
        "maps": 311,
        "rating": 1.08
    },
    {
        "name": "COLDYY1",
        "country": "https://static.hltv.org/images/bigflags/30x20/UA.gif",
        "id": 9083,
        "team_name": "Spirit",
        "team_logo": "https://static.hltv.org/images/team/logo/7020",
        "maps": 137,
        "rating": 1.08
    },
    {
        "name": "Viva",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 15419,
        "team_name": "R-Stars",
        "team_logo": "https://static.hltv.org/images/team/logo/10472",
        "maps": 197,
        "rating": 1.08
    },
    {
        "name": "NickelBack",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 11498,
        "team_name": "pro100",
        "team_logo": "https://static.hltv.org/images/team/logo/7898",
        "maps": 195,
        "rating": 1.08
    },
    {
        "name": "Perfecto",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 16947,
        "team_name": "Syman",
        "team_logo": "https://static.hltv.org/images/team/logo/8772",
        "maps": 169,
        "rating": 1.08
    },
    {
        "name": "EspiranTo",
        "country": "https://static.hltv.org/images/bigflags/30x20/LT.gif",
        "id": 12030,
        "team_name": "CR4ZY",
        "team_logo": "https://static.hltv.org/images/team/logo/10150",
        "maps": 278,
        "rating": 1.08
    },
    {
        "name": "apocdud",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 12872,
        "team_name": "Genuine",
        "team_logo": "https://static.hltv.org/images/team/logo/9747",
        "maps": 160,
        "rating": 1.08
    },
    {
        "name": "Furlan",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 8327,
        "team_name": "AGO",
        "team_logo": "https://static.hltv.org/images/team/logo/8068",
        "maps": 290,
        "rating": 1.08
    },
    {
        "name": "qqGOD",
        "country": "https://static.hltv.org/images/bigflags/30x20/TH.gif",
        "id": 9289,
        "team_name": "Lucid Dream",
        "team_logo": "https://static.hltv.org/images/team/logo/8680",
        "maps": 128,
        "rating": 1.08
    },
    {
        "name": "chelo",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 10566,
        "team_name": "INTZ",
        "team_logo": "https://static.hltv.org/images/team/logo/6619",
        "maps": 177,
        "rating": 1.08
    },
    {
        "name": "es3tag",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 8611,
        "team_name": "Heroic",
        "team_logo": "https://static.hltv.org/images/team/logo/7175",
        "maps": 241,
        "rating": 1.08
    },
    {
        "name": "exit",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 11154,
        "team_name": "Sharks",
        "team_logo": "https://static.hltv.org/images/team/logo/8113",
        "maps": 147,
        "rating": 1.08
    },
    {
        "name": "DickStacy",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 12876,
        "team_name": "Grayhound",
        "team_logo": "https://static.hltv.org/images/team/logo/8008",
        "maps": 196,
        "rating": 1.07
    },
    {
        "name": "land1n",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 10557,
        "team_name": "paiN",
        "team_logo": "https://static.hltv.org/images/team/logo/4773",
        "maps": 169,
        "rating": 1.07
    },
    {
        "name": "aizy",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 8095,
        "team_name": "North",
        "team_logo": "https://static.hltv.org/images/team/logo/7533",
        "maps": 182,
        "rating": 1.07
    },
    {
        "name": "real",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 16769,
        "team_name": "W7M",
        "team_logo": "https://static.hltv.org/images/team/logo/8574",
        "maps": 178,
        "rating": 1.07
    },
    {
        "name": "mds",
        "country": "https://static.hltv.org/images/bigflags/30x20/BY.gif",
        "id": 11926,
        "team_name": "Nemiga",
        "team_logo": "https://static.hltv.org/images/team/logo/7969",
        "maps": 286,
        "rating": 1.07
    },
    {
        "name": "disco doplan",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 9256,
        "team_name": "Ancient",
        "team_logo": "https://static.hltv.org/images/team/logo/6685",
        "maps": 125,
        "rating": 1.07
    },
    {
        "name": "malta",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 11485,
        "team_name": "Grayhound",
        "team_logo": "https://static.hltv.org/images/team/logo/8008",
        "maps": 198,
        "rating": 1.07
    },
    {
        "name": "Stewie2K",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 8797,
        "team_name": "Liquid",
        "team_logo": "https://static.hltv.org/images/team/logo/5973",
        "maps": 223,
        "rating": 1.07
    },
    {
        "name": "ryotzz",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 13989,
        "team_name": "W7M",
        "team_logo": "https://static.hltv.org/images/team/logo/8574",
        "maps": 178,
        "rating": 1.07
    },
    {
        "name": "supra",
        "country": "https://static.hltv.org/images/bigflags/30x20/EE.gif",
        "id": 16415,
        "team_name": "Gambit Youngsters",
        "team_logo": "https://static.hltv.org/images/team/logo/9976",
        "maps": 138,
        "rating": 1.07
    },
    {
        "name": "Spongey",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13589,
        "team_name": "Triumph",
        "team_logo": "https://static.hltv.org/images/team/logo/10304",
        "maps": 149,
        "rating": 1.07
    },
    {
        "name": "loWel",
        "country": "https://static.hltv.org/images/bigflags/30x20/ES.gif",
        "id": 3997,
        "team_name": "Movistar Riders",
        "team_logo": "https://static.hltv.org/images/team/logo/7718",
        "maps": 189,
        "rating": 1.07
    },
    {
        "name": "food",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 9875,
        "team_name": "eUnited",
        "team_logo": "https://static.hltv.org/images/team/logo/7106",
        "maps": 149,
        "rating": 1.07
    },
    {
        "name": "iDk",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 10818,
        "team_name": "Imperial",
        "team_logo": "https://static.hltv.org/images/team/logo/9455",
        "maps": 124,
        "rating": 1.07
    },
    {
        "name": "Krad",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 12027,
        "team_name": "Hard Legion",
        "team_logo": "https://static.hltv.org/images/team/logo/10421",
        "maps": 209,
        "rating": 1.07
    },
    {
        "name": "broky",
        "country": "https://static.hltv.org/images/bigflags/30x20/LV.gif",
        "id": 18053,
        "team_name": "FaZe",
        "team_logo": "https://static.hltv.org/images/team/logo/6667",
        "maps": 257,
        "rating": 1.07
    },
    {
        "name": "slaxz-",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 15370,
        "team_name": "ALTERNATE aTTaX",
        "team_logo": "https://static.hltv.org/images/team/logo/4501",
        "maps": 181,
        "rating": 1.07
    },
    {
        "name": "zqkS",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 7383,
        "team_name": "Keyd",
        "team_logo": "https://static.hltv.org/images/team/logo/6033",
        "maps": 139,
        "rating": 1.07
    },
    {
        "name": "Andyy",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 17566,
        "team_name": "Unicorns of Love",
        "team_logo": "https://static.hltv.org/images/team/logo/9812",
        "maps": 143,
        "rating": 1.07
    },
    {
        "name": "xiaosaGe",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 11574,
        "team_name": "R-Stars",
        "team_logo": "https://static.hltv.org/images/team/logo/10472",
        "maps": 190,
        "rating": 1.07
    },
    {
        "name": "Relaxa",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 9279,
        "team_name": "Chaos",
        "team_logo": "https://static.hltv.org/images/team/logo/9085",
        "maps": 290,
        "rating": 1.07
    },
    {
        "name": "scoobyxie",
        "country": "https://static.hltv.org/images/bigflags/30x20/UA.gif",
        "id": 15547,
        "team_name": "HellRaisers",
        "team_logo": "https://static.hltv.org/images/team/logo/5310",
        "maps": 128,
        "rating": 1.07
    },
    {
        "name": "shox",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 1225,
        "team_name": "Vitality",
        "team_logo": "https://static.hltv.org/images/team/logo/9565",
        "maps": 219,
        "rating": 1.07
    },
    {
        "name": "Jerry",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 13157,
        "team_name": "forZe",
        "team_logo": "https://static.hltv.org/images/team/logo/8135",
        "maps": 366,
        "rating": 1.06
    },
    {
        "name": "GruBy",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 8570,
        "team_name": "AGO",
        "team_logo": "https://static.hltv.org/images/team/logo/8068",
        "maps": 292,
        "rating": 1.06
    },
    {
        "name": "speed4k",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 13155,
        "team_name": "Hard Legion",
        "team_logo": "https://static.hltv.org/images/team/logo/10421",
        "maps": 208,
        "rating": 1.06
    },
    {
        "name": "rain",
        "country": "https://static.hltv.org/images/bigflags/30x20/NO.gif",
        "id": 8183,
        "team_name": "FaZe",
        "team_logo": "https://static.hltv.org/images/team/logo/6667",
        "maps": 170,
        "rating": 1.06
    },
    {
        "name": "Maikelele",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 1045,
        "team_name": "GODSENT",
        "team_logo": "https://static.hltv.org/images/team/logo/6902",
        "maps": 270,
        "rating": 1.06
    },
    {
        "name": "NBK-",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 7168,
        "team_name": "Vitality",
        "team_logo": "https://static.hltv.org/images/team/logo/9565",
        "maps": 224,
        "rating": 1.06
    },
    {
        "name": "cadiaN",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 7964,
        "team_name": "Heroic",
        "team_logo": "https://static.hltv.org/images/team/logo/7175",
        "maps": 155,
        "rating": 1.06
    },
    {
        "name": "JW",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 3849,
        "team_name": "fnatic",
        "team_logo": "https://static.hltv.org/images/team/logo/4991",
        "maps": 205,
        "rating": 1.06
    },
    {
        "name": "bottle",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 10168,
        "team_name": "R-Stars",
        "team_logo": "https://static.hltv.org/images/team/logo/10472",
        "maps": 180,
        "rating": 1.06
    },
    {
        "name": "gla1ve",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 7412,
        "team_name": "Astralis",
        "team_logo": "https://static.hltv.org/images/team/logo/6665",
        "maps": 159,
        "rating": 1.06
    },
    {
        "name": "WorldEdit",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 7403,
        "team_name": "pro100",
        "team_logo": "https://static.hltv.org/images/team/logo/7898",
        "maps": 249,
        "rating": 1.06
    },
    {
        "name": "Tuurtle",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 14394,
        "team_name": "DETONA",
        "team_logo": "https://static.hltv.org/images/team/logo/8902",
        "maps": 186,
        "rating": 1.06
    },
    {
        "name": "cam",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13186,
        "team_name": "Singularity",
        "team_logo": "https://static.hltv.org/images/team/logo/6978",
        "maps": 236,
        "rating": 1.06
    },
    {
        "name": "JaCkz",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 284,
        "team_name": "G2",
        "team_logo": "https://static.hltv.org/images/team/logo/5995",
        "maps": 245,
        "rating": 1.06
    },
    {
        "name": "emagine",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 8744,
        "team_name": "ORDER",
        "team_logo": "https://static.hltv.org/images/team/logo/8668",
        "maps": 185,
        "rating": 1.06
    },
    {
        "name": "Sobol",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 15940,
        "team_name": "PACT",
        "team_logo": "https://static.hltv.org/images/team/logo/8248",
        "maps": 220,
        "rating": 1.06
    },
    {
        "name": "Relyks",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 8517,
        "team_name": "Singularity",
        "team_logo": "https://static.hltv.org/images/team/logo/6978",
        "maps": 116,
        "rating": 1.06
    },
    {
        "name": "Snakes",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13229,
        "team_name": "Triumph",
        "team_logo": "https://static.hltv.org/images/team/logo/10304",
        "maps": 139,
        "rating": 1.06
    },
    {
        "name": "leo_druNky",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 11329,
        "team_name": "Sharks",
        "team_logo": "https://static.hltv.org/images/team/logo/8113",
        "maps": 146,
        "rating": 1.06
    },
    {
        "name": "Nifty",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 9069,
        "team_name": "Envy",
        "team_logo": "https://static.hltv.org/images/team/logo/5991",
        "maps": 121,
        "rating": 1.06
    },
    {
        "name": "AiyvaN",
        "country": "https://static.hltv.org/images/bigflags/30x20/UA.gif",
        "id": 9349,
        "team_name": "pro100",
        "team_logo": "https://static.hltv.org/images/team/logo/7898",
        "maps": 139,
        "rating": 1.06
    },
    {
        "name": "innocent",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 3669,
        "team_name": "Illuminar",
        "team_logo": "https://static.hltv.org/images/team/logo/8813",
        "maps": 220,
        "rating": 1.06
    },
    {
        "name": "SHOOWTiME",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 9220,
        "team_name": "Keyd",
        "team_logo": "https://static.hltv.org/images/team/logo/6033",
        "maps": 143,
        "rating": 1.06
    },
    {
        "name": "dazzLe",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 11064,
        "team_name": "Singularity",
        "team_logo": "https://static.hltv.org/images/team/logo/6978",
        "maps": 143,
        "rating": 1.05
    },
    {
        "name": "Attacker",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 8552,
        "team_name": "TYLOO",
        "team_logo": "https://static.hltv.org/images/team/logo/4863",
        "maps": 243,
        "rating": 1.05
    },
    {
        "name": "SZPERO",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 973,
        "team_name": "Wisla Krakow",
        "team_logo": "https://static.hltv.org/images/team/logo/10426",
        "maps": 309,
        "rating": 1.05
    },
    {
        "name": "EasTor",
        "country": "https://static.hltv.org/images/bigflags/30x20/ES.gif",
        "id": 4373,
        "team_name": "Movistar Riders",
        "team_logo": "https://static.hltv.org/images/team/logo/7718",
        "maps": 158,
        "rating": 1.05
    },
    {
        "name": "flamie",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 7594,
        "team_name": "Natus Vincere",
        "team_logo": "https://static.hltv.org/images/team/logo/4608",
        "maps": 139,
        "rating": 1.05
    },
    {
        "name": "Patitek",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 14670,
        "team_name": "Izako Boars",
        "team_logo": "https://static.hltv.org/images/team/logo/7681",
        "maps": 174,
        "rating": 1.05
    },
    {
        "name": "Ramz1kBO$$",
        "country": "https://static.hltv.org/images/bigflags/30x20/KZ.gif",
        "id": 11842,
        "team_name": "Syman",
        "team_logo": "https://static.hltv.org/images/team/logo/8772",
        "maps": 156,
        "rating": 1.05
    },
    {
        "name": "Lucky",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 13497,
        "team_name": "Heretics",
        "team_logo": "https://static.hltv.org/images/team/logo/8346",
        "maps": 283,
        "rating": 1.05
    },
    {
        "name": "kressy",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 12782,
        "team_name": "ALTERNATE aTTaX",
        "team_logo": "https://static.hltv.org/images/team/logo/4501",
        "maps": 165,
        "rating": 1.05
    },
    {
        "name": "jedqr",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 14684,
        "team_name": "Wisla Krakow",
        "team_logo": "https://static.hltv.org/images/team/logo/10426",
        "maps": 199,
        "rating": 1.05
    },
    {
        "name": "ScreaM",
        "country": "https://static.hltv.org/images/bigflags/30x20/BE.gif",
        "id": 7390,
        "team_name": "GamerLegion",
        "team_logo": "https://static.hltv.org/images/team/logo/9928",
        "maps": 149,
        "rating": 1.05
    },
    {
        "name": "stellar",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13177,
        "team_name": "Divine",
        "team_logo": "https://static.hltv.org/images/team/logo/10302",
        "maps": 159,
        "rating": 1.05
    },
    {
        "name": "prt",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 10827,
        "team_name": "DETONA",
        "team_logo": "https://static.hltv.org/images/team/logo/8902",
        "maps": 198,
        "rating": 1.05
    },
    {
        "name": "ROBO",
        "country": "https://static.hltv.org/images/bigflags/30x20/BY.gif",
        "id": 3410,
        "team_name": "Nemiga",
        "team_logo": "https://static.hltv.org/images/team/logo/7969",
        "maps": 237,
        "rating": 1.05
    },
    {
        "name": "Nodios",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 8891,
        "team_name": "Copenhagen Flames",
        "team_logo": "https://static.hltv.org/images/team/logo/7461",
        "maps": 175,
        "rating": 1.05
    },
    {
        "name": "reatz",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 8242,
        "team_name": "Illuminar",
        "team_logo": "https://static.hltv.org/images/team/logo/8813",
        "maps": 222,
        "rating": 1.05
    },
    {
        "name": "mouz",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 8323,
        "team_name": "ARCY",
        "team_logo": "https://static.hltv.org/images/team/logo/10494",
        "maps": 207,
        "rating": 1.05
    },
    {
        "name": "Ax1Le",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 16555,
        "team_name": "Gambit Youngsters",
        "team_logo": "https://static.hltv.org/images/team/logo/9976",
        "maps": 163,
        "rating": 1.05
    },
    {
        "name": "Jinxx",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 11538,
        "team_name": "Genuine",
        "team_logo": "https://static.hltv.org/images/team/logo/9747",
        "maps": 151,
        "rating": 1.05
    },
    {
        "name": "fenvicious",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 10590,
        "team_name": "Unique",
        "team_logo": "https://static.hltv.org/images/team/logo/9287",
        "maps": 206,
        "rating": 1.05
    },
    {
        "name": "DiMKE",
        "country": "https://static.hltv.org/images/bigflags/30x20/RS.gif",
        "id": 3732,
        "team_name": "Juggernauts",
        "team_logo": "https://static.hltv.org/images/team/logo/10509",
        "maps": 125,
        "rating": 1.05
    },
    {
        "name": "Bwills",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 16647,
        "team_name": "Rap Gang",
        "team_logo": "https://static.hltv.org/images/team/logo/10261",
        "maps": 117,
        "rating": 1.05
    },
    {
        "name": "Aerial",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 4076,
        "team_name": "ENCE",
        "team_logo": "https://static.hltv.org/images/team/logo/4869",
        "maps": 167,
        "rating": 1.04
    },
    {
        "name": "JDC",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 14929,
        "team_name": "Unicorns of Love",
        "team_logo": "https://static.hltv.org/images/team/logo/9812",
        "maps": 145,
        "rating": 1.04
    },
    {
        "name": "JUGi",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 8783,
        "team_name": "North",
        "team_logo": "https://static.hltv.org/images/team/logo/7533",
        "maps": 155,
        "rating": 1.04
    },
    {
        "name": "boX",
        "country": "https://static.hltv.org/images/bigflags/30x20/BY.gif",
        "id": 13976,
        "team_name": "Nemiga",
        "team_logo": "https://static.hltv.org/images/team/logo/7969",
        "maps": 303,
        "rating": 1.04
    },
    {
        "name": "bit",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 555,
        "team_name": "TeamOne",
        "team_logo": "https://static.hltv.org/images/team/logo/6947",
        "maps": 152,
        "rating": 1.04
    },
    {
        "name": "AmaNEk",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 9616,
        "team_name": "G2",
        "team_logo": "https://static.hltv.org/images/team/logo/5995",
        "maps": 204,
        "rating": 1.04
    },
    {
        "name": "TeSeS",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 12018,
        "team_name": "Copenhagen Flames",
        "team_logo": "https://static.hltv.org/images/team/logo/7461",
        "maps": 163,
        "rating": 1.04
    },
    {
        "name": "apEX",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 7322,
        "team_name": "Vitality",
        "team_logo": "https://static.hltv.org/images/team/logo/9565",
        "maps": 270,
        "rating": 1.04
    },
    {
        "name": "void",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 14954,
        "team_name": "Ground Zero",
        "team_logo": "https://static.hltv.org/images/team/logo/8536",
        "maps": 146,
        "rating": 1.04
    },
    {
        "name": "kinqie",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 3459,
        "team_name": "Hard Legion",
        "team_logo": "https://static.hltv.org/images/team/logo/10421",
        "maps": 208,
        "rating": 1.04
    },
    {
        "name": "stfN",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 8800,
        "team_name": "ALTERNATE aTTaX",
        "team_logo": "https://static.hltv.org/images/team/logo/4501",
        "maps": 181,
        "rating": 1.04
    },
    {
        "name": "tiburci0",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 16695,
        "team_name": "DETONA",
        "team_logo": "https://static.hltv.org/images/team/logo/8902",
        "maps": 198,
        "rating": 1.04
    },
    {
        "name": "nitr0",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 7687,
        "team_name": "Liquid",
        "team_logo": "https://static.hltv.org/images/team/logo/5973",
        "maps": 221,
        "rating": 1.04
    },
    {
        "name": "raafa",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 11748,
        "team_name": "W7M",
        "team_logo": "https://static.hltv.org/images/team/logo/8574",
        "maps": 178,
        "rating": 1.04
    },
    {
        "name": "soju_j",
        "country": "https://static.hltv.org/images/bigflags/30x20/NZ.gif",
        "id": 12590,
        "team_name": "AVANT",
        "team_logo": "https://static.hltv.org/images/team/logo/5293",
        "maps": 126,
        "rating": 1.04
    },
    {
        "name": "nex",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 7256,
        "team_name": "BIG",
        "team_logo": "https://static.hltv.org/images/team/logo/7532",
        "maps": 148,
        "rating": 1.04
    },
    {
        "name": "freddieb",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 9257,
        "team_name": "GamerLegion",
        "team_logo": "https://static.hltv.org/images/team/logo/9928",
        "maps": 240,
        "rating": 1.04
    },
    {
        "name": "REZ",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 9278,
        "team_name": "NiP",
        "team_logo": "https://static.hltv.org/images/team/logo/4411",
        "maps": 184,
        "rating": 1.04
    },
    {
        "name": "Forester",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 13982,
        "team_name": "Hard Legion",
        "team_logo": "https://static.hltv.org/images/team/logo/10421",
        "maps": 208,
        "rating": 1.04
    },
    {
        "name": "Bobosaur",
        "country": "https://static.hltv.org/images/bigflags/30x20/SG.gif",
        "id": 12476,
        "team_name": "BOOT",
        "team_logo": "https://static.hltv.org/images/team/logo/6898",
        "maps": 150,
        "rating": 1.04
    },
    {
        "name": "reversive",
        "country": "https://static.hltv.org/images/bigflags/30x20/AR.gif",
        "id": 9221,
        "team_name": "Isurus",
        "team_logo": "https://static.hltv.org/images/team/logo/7653",
        "maps": 131,
        "rating": 1.04
    },
    {
        "name": "dennis",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 1146,
        "team_name": "GamerLegion",
        "team_logo": "https://static.hltv.org/images/team/logo/9928",
        "maps": 199,
        "rating": 1.04
    },
    {
        "name": "HS",
        "country": "https://static.hltv.org/images/bigflags/30x20/EE.gif",
        "id": 8994,
        "team_name": "GamerLegion",
        "team_logo": "https://static.hltv.org/images/team/logo/9928",
        "maps": 164,
        "rating": 1.04
    },
    {
        "name": "chrisJ",
        "country": "https://static.hltv.org/images/bigflags/30x20/NL.gif",
        "id": 2730,
        "team_name": "mousesports",
        "team_logo": "https://static.hltv.org/images/team/logo/4494",
        "maps": 202,
        "rating": 1.04
    },
    {
        "name": "B\u00e5\u00e5ten",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 10463,
        "team_name": "Chaos",
        "team_logo": "https://static.hltv.org/images/team/logo/9085",
        "maps": 223,
        "rating": 1.04
    },
    {
        "name": "blocker",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 10697,
        "team_name": "Windigo",
        "team_logo": "https://static.hltv.org/images/team/logo/8513",
        "maps": 212,
        "rating": 1.04
    },
    {
        "name": "kioShiMa",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 4959,
        "team_name": "Heretics",
        "team_logo": "https://static.hltv.org/images/team/logo/8346",
        "maps": 143,
        "rating": 1.03
    },
    {
        "name": "tarik",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 8523,
        "team_name": "Evil Geniuses",
        "team_logo": "https://static.hltv.org/images/team/logo/10399",
        "maps": 216,
        "rating": 1.03
    },
    {
        "name": "1962",
        "country": "https://static.hltv.org/images/bigflags/30x20/AR.gif",
        "id": 12094,
        "team_name": "Isurus",
        "team_logo": "https://static.hltv.org/images/team/logo/7653",
        "maps": 125,
        "rating": 1.03
    },
    {
        "name": "doto",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 9819,
        "team_name": "HAVU",
        "team_logo": "https://static.hltv.org/images/team/logo/7865",
        "maps": 189,
        "rating": 1.03
    },
    {
        "name": "ANDROID",
        "country": "https://static.hltv.org/images/bigflags/30x20/CA.gif",
        "id": 9043,
        "team_name": "Envy",
        "team_logo": "https://static.hltv.org/images/team/logo/5991",
        "maps": 118,
        "rating": 1.03
    },
    {
        "name": "FugLy",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 8522,
        "team_name": "Envy",
        "team_logo": "https://static.hltv.org/images/team/logo/5991",
        "maps": 124,
        "rating": 1.03
    },
    {
        "name": "J1rah",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 12593,
        "team_name": "AVANT",
        "team_logo": "https://static.hltv.org/images/team/logo/5293",
        "maps": 132,
        "rating": 1.03
    },
    {
        "name": "twist",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 7443,
        "team_name": "NiP",
        "team_logo": "https://static.hltv.org/images/team/logo/4411",
        "maps": 178,
        "rating": 1.03
    },
    {
        "name": "yel",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 10560,
        "team_name": "INTZ",
        "team_logo": "https://static.hltv.org/images/team/logo/6619",
        "maps": 191,
        "rating": 1.03
    },
    {
        "name": "Dima",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 8125,
        "team_name": "Espada",
        "team_logo": "https://static.hltv.org/images/team/logo/8669",
        "maps": 130,
        "rating": 1.03
    },
    {
        "name": "f4stzin",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 18140,
        "team_name": "Keyd",
        "team_logo": "https://static.hltv.org/images/team/logo/6033",
        "maps": 130,
        "rating": 1.03
    },
    {
        "name": "darko",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 11287,
        "team_name": "PACT",
        "team_logo": "https://static.hltv.org/images/team/logo/8248",
        "maps": 215,
        "rating": 1.03
    },
    {
        "name": "MINISE",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 2826,
        "team_name": "ARCY",
        "team_logo": "https://static.hltv.org/images/team/logo/10494",
        "maps": 209,
        "rating": 1.03
    },
    {
        "name": "s0m",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 14365,
        "team_name": "Envy",
        "team_logo": "https://static.hltv.org/images/team/logo/5991",
        "maps": 126,
        "rating": 1.03
    },
    {
        "name": "dzt",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 10570,
        "team_name": "Keyd",
        "team_logo": "https://static.hltv.org/images/team/logo/6033",
        "maps": 139,
        "rating": 1.03
    },
    {
        "name": "mono",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 9916,
        "team_name": "Illuminar",
        "team_logo": "https://static.hltv.org/images/team/logo/8813",
        "maps": 306,
        "rating": 1.03
    },
    {
        "name": "blackpoisoN",
        "country": "https://static.hltv.org/images/bigflags/30x20/ZA.gif",
        "id": 7992,
        "team_name": "ATK",
        "team_logo": "https://static.hltv.org/images/team/logo/9943",
        "maps": 142,
        "rating": 1.03
    },
    {
        "name": "snatchie",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 9574,
        "team_name": "Virtus.pro",
        "team_logo": "https://static.hltv.org/images/team/logo/5378",
        "maps": 265,
        "rating": 1.03
    },
    {
        "name": "Hunter",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13185,
        "team_name": "Rugratz",
        "team_logo": "https://static.hltv.org/images/team/logo/10017",
        "maps": 132,
        "rating": 1.03
    },
    {
        "name": "Sidney",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 15697,
        "team_name": "AGO",
        "team_logo": "https://static.hltv.org/images/team/logo/8068",
        "maps": 182,
        "rating": 1.03
    },
    {
        "name": "TMB",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 11995,
        "team_name": "Copenhagen Flames",
        "team_logo": "https://static.hltv.org/images/team/logo/7461",
        "maps": 140,
        "rating": 1.03
    },
    {
        "name": "NEKIZ",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 9482,
        "team_name": "Luminosity",
        "team_logo": "https://static.hltv.org/images/team/logo/6290",
        "maps": 118,
        "rating": 1.03
    },
    {
        "name": "steel",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 7382,
        "team_name": "Movistar Riders",
        "team_logo": "https://static.hltv.org/images/team/logo/7718",
        "maps": 192,
        "rating": 1.03
    },
    {
        "name": "Rainwaker",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 17145,
        "team_name": "SKADE",
        "team_logo": "https://static.hltv.org/images/team/logo/10386",
        "maps": 117,
        "rating": 1.03
    },
    {
        "name": "expro",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 12490,
        "team_name": "Invictus",
        "team_logo": "https://static.hltv.org/images/team/logo/7966",
        "maps": 140,
        "rating": 1.03
    },
    {
        "name": "VINI",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 12822,
        "team_name": "FURIA",
        "team_logo": "https://static.hltv.org/images/team/logo/8297",
        "maps": 279,
        "rating": 1.03
    },
    {
        "name": "SADDYX",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 15563,
        "team_name": "SJ",
        "team_logo": "https://static.hltv.org/images/team/logo/8504",
        "maps": 249,
        "rating": 1.02
    },
    {
        "name": "Crityourface",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 15900,
        "team_name": "PACT",
        "team_logo": "https://static.hltv.org/images/team/logo/8248",
        "maps": 129,
        "rating": 1.02
    },
    {
        "name": "Goofy",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 15428,
        "team_name": "PACT",
        "team_logo": "https://static.hltv.org/images/team/logo/8248",
        "maps": 235,
        "rating": 1.02
    },
    {
        "name": "SOKER",
        "country": "https://static.hltv.org/images/bigflags/30x20/ES.gif",
        "id": 7388,
        "team_name": "Movistar Riders",
        "team_logo": "https://static.hltv.org/images/team/logo/7718",
        "maps": 193,
        "rating": 1.02
    },
    {
        "name": "SkulL",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 14290,
        "team_name": "Genuine",
        "team_logo": "https://static.hltv.org/images/team/logo/9747",
        "maps": 161,
        "rating": 1.02
    },
    {
        "name": "Llamas",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 16529,
        "team_name": "Ground Zero",
        "team_logo": "https://static.hltv.org/images/team/logo/8536",
        "maps": 142,
        "rating": 1.02
    },
    {
        "name": "BURNRUOk",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 9636,
        "team_name": "Ground Zero",
        "team_logo": "https://static.hltv.org/images/team/logo/8536",
        "maps": 146,
        "rating": 1.02
    },
    {
        "name": "neaLaN",
        "country": "https://static.hltv.org/images/bigflags/30x20/KZ.gif",
        "id": 11940,
        "team_name": "Syman",
        "team_logo": "https://static.hltv.org/images/team/logo/8772",
        "maps": 186,
        "rating": 1.02
    },
    {
        "name": "mopoz",
        "country": "https://static.hltv.org/images/bigflags/30x20/ES.gif",
        "id": 9254,
        "team_name": "Movistar Riders",
        "team_logo": "https://static.hltv.org/images/team/logo/7718",
        "maps": 275,
        "rating": 1.02
    },
    {
        "name": "Savage",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 180,
        "team_name": "5POWER",
        "team_logo": "https://static.hltv.org/images/team/logo/7092",
        "maps": 135,
        "rating": 1.02
    },
    {
        "name": "morelz",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 8324,
        "team_name": "Wisla Krakow",
        "team_logo": "https://static.hltv.org/images/team/logo/10426",
        "maps": 194,
        "rating": 1.02
    },
    {
        "name": "olofmeister",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 885,
        "team_name": "FaZe",
        "team_logo": "https://static.hltv.org/images/team/logo/6667",
        "maps": 170,
        "rating": 1.02
    },
    {
        "name": "foxz",
        "country": "https://static.hltv.org/images/bigflags/30x20/TH.gif",
        "id": 14577,
        "team_name": "Alpha Red",
        "team_logo": "https://static.hltv.org/images/team/logo/8848",
        "maps": 159,
        "rating": 1.02
    },
    {
        "name": "LUCAS1",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 8566,
        "team_name": "Luminosity",
        "team_logo": "https://static.hltv.org/images/team/logo/6290",
        "maps": 188,
        "rating": 1.02
    },
    {
        "name": "max",
        "country": "https://static.hltv.org/images/bigflags/30x20/UY.gif",
        "id": 12092,
        "team_name": "Isurus",
        "team_logo": "https://static.hltv.org/images/team/logo/7653",
        "maps": 131,
        "rating": 1.02
    },
    {
        "name": "friberg",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 7148,
        "team_name": "Heroic",
        "team_logo": "https://static.hltv.org/images/team/logo/7175",
        "maps": 136,
        "rating": 1.02
    },
    {
        "name": "bondik",
        "country": "https://static.hltv.org/images/bigflags/30x20/UA.gif",
        "id": 2131,
        "team_name": "Winstrike",
        "team_logo": "https://static.hltv.org/images/team/logo/9183",
        "maps": 180,
        "rating": 1.02
    },
    {
        "name": "Basso",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 10443,
        "team_name": "Copenhagen Flames",
        "team_logo": "https://static.hltv.org/images/team/logo/7461",
        "maps": 179,
        "rating": 1.02
    },
    {
        "name": "Mayker",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 14957,
        "team_name": "Genuine",
        "team_logo": "https://static.hltv.org/images/team/logo/9747",
        "maps": 161,
        "rating": 1.02
    },
    {
        "name": "seb",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 3886,
        "team_name": "Singularity",
        "team_logo": "https://static.hltv.org/images/team/logo/6978",
        "maps": 170,
        "rating": 1.02
    },
    {
        "name": "R0b3n",
        "country": "https://static.hltv.org/images/bigflags/30x20/LV.gif",
        "id": 14205,
        "team_name": "Unique",
        "team_logo": "https://static.hltv.org/images/team/logo/9287",
        "maps": 206,
        "rating": 1.02
    },
    {
        "name": "denis",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 7511,
        "team_name": "Sprout",
        "team_logo": "https://static.hltv.org/images/team/logo/8637",
        "maps": 259,
        "rating": 1.02
    },
    {
        "name": "niko",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 10264,
        "team_name": "OpTic",
        "team_logo": "https://static.hltv.org/images/team/logo/6615",
        "maps": 133,
        "rating": 1.02
    },
    {
        "name": "interz",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 15071,
        "team_name": "Gambit Youngsters",
        "team_logo": "https://static.hltv.org/images/team/logo/9976",
        "maps": 138,
        "rating": 1.02
    },
    {
        "name": "Zellsis",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13188,
        "team_name": "Lazarus",
        "team_logo": "https://static.hltv.org/images/team/logo/9945",
        "maps": 120,
        "rating": 1.02
    },
    {
        "name": "Liazz",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 10588,
        "team_name": "100 Thieves",
        "team_logo": "https://static.hltv.org/images/team/logo/8474",
        "maps": 148,
        "rating": 1.02
    },
    {
        "name": "jnt",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 11747,
        "team_name": "Sharks",
        "team_logo": "https://static.hltv.org/images/team/logo/8113",
        "maps": 145,
        "rating": 1.02
    },
    {
        "name": "n0rb3r7",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 16612,
        "team_name": "Syman",
        "team_logo": "https://static.hltv.org/images/team/logo/8772",
        "maps": 245,
        "rating": 1.02
    },
    {
        "name": "kaper",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 14221,
        "team_name": "Wisla Krakow",
        "team_logo": "https://static.hltv.org/images/team/logo/10426",
        "maps": 309,
        "rating": 1.01
    },
    {
        "name": "svyat",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 12016,
        "team_name": "Hard Legion",
        "team_logo": "https://static.hltv.org/images/team/logo/10421",
        "maps": 208,
        "rating": 1.01
    },
    {
        "name": "Console",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 10404,
        "team_name": "Copenhagen Flames",
        "team_logo": "https://static.hltv.org/images/team/logo/7461",
        "maps": 130,
        "rating": 1.01
    },
    {
        "name": "Surreal",
        "country": "https://static.hltv.org/images/bigflags/30x20/GB.gif",
        "id": 9019,
        "team_name": "Phoenix",
        "team_logo": "https://static.hltv.org/images/team/logo/10420",
        "maps": 299,
        "rating": 1.01
    },
    {
        "name": "GuardiaN",
        "country": "https://static.hltv.org/images/bigflags/30x20/SK.gif",
        "id": 2757,
        "team_name": "Natus Vincere",
        "team_logo": "https://static.hltv.org/images/team/logo/4608",
        "maps": 153,
        "rating": 1.01
    },
    {
        "name": "JT",
        "country": "https://static.hltv.org/images/bigflags/30x20/ZA.gif",
        "id": 11630,
        "team_name": "ATK",
        "team_logo": "https://static.hltv.org/images/team/logo/9943",
        "maps": 223,
        "rating": 1.01
    },
    {
        "name": "YJ",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 11746,
        "team_name": "W7M",
        "team_logo": "https://static.hltv.org/images/team/logo/8574",
        "maps": 150,
        "rating": 1.01
    },
    {
        "name": "shuadapai",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 11576,
        "team_name": "R-Stars",
        "team_logo": "https://static.hltv.org/images/team/logo/10472",
        "maps": 190,
        "rating": 1.01
    },
    {
        "name": "Snappi",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 922,
        "team_name": "Heroic",
        "team_logo": "https://static.hltv.org/images/team/logo/7175",
        "maps": 194,
        "rating": 1.01
    },
    {
        "name": "mirbit",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 11701,
        "team_name": "Sprout",
        "team_logo": "https://static.hltv.org/images/team/logo/8637",
        "maps": 243,
        "rating": 1.01
    },
    {
        "name": "oskarish",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 8321,
        "team_name": "Illuminar",
        "team_logo": "https://static.hltv.org/images/team/logo/8813",
        "maps": 308,
        "rating": 1.01
    },
    {
        "name": "H4RR3",
        "country": "https://static.hltv.org/images/bigflags/30x20/NO.gif",
        "id": 14311,
        "team_name": "Nordavind",
        "team_logo": "https://static.hltv.org/images/team/logo/8769",
        "maps": 133,
        "rating": 1.01
    },
    {
        "name": "nafany",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 16921,
        "team_name": "Gambit Youngsters",
        "team_logo": "https://static.hltv.org/images/team/logo/9976",
        "maps": 138,
        "rating": 1.01
    },
    {
        "name": "DeathZz",
        "country": "https://static.hltv.org/images/bigflags/30x20/ES.gif",
        "id": 13093,
        "team_name": "Movistar Riders",
        "team_logo": "https://static.hltv.org/images/team/logo/7718",
        "maps": 145,
        "rating": 1.01
    },
    {
        "name": "SPELLAN",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 11217,
        "team_name": "SKADE",
        "team_logo": "https://static.hltv.org/images/team/logo/10386",
        "maps": 299,
        "rating": 1.01
    },
    {
        "name": "stanislaw",
        "country": "https://static.hltv.org/images/bigflags/30x20/CA.gif",
        "id": 8507,
        "team_name": "Evil Geniuses",
        "team_logo": "https://static.hltv.org/images/team/logo/10399",
        "maps": 205,
        "rating": 1.01
    },
    {
        "name": "ALEX",
        "country": "https://static.hltv.org/images/bigflags/30x20/GB.gif",
        "id": 8184,
        "team_name": "Vitality",
        "team_logo": "https://static.hltv.org/images/team/logo/9565",
        "maps": 270,
        "rating": 1.01
    },
    {
        "name": "Spiidi",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 7499,
        "team_name": "Sprout",
        "team_logo": "https://static.hltv.org/images/team/logo/8637",
        "maps": 311,
        "rating": 1.01
    },
    {
        "name": "cromen",
        "country": "https://static.hltv.org/images/bigflags/30x20/NO.gif",
        "id": 10397,
        "team_name": "Nordavind",
        "team_logo": "https://static.hltv.org/images/team/logo/8769",
        "maps": 161,
        "rating": 1.01
    },
    {
        "name": "arvid",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 9325,
        "team_name": "SJ",
        "team_logo": "https://static.hltv.org/images/team/logo/8504",
        "maps": 250,
        "rating": 1.01
    },
    {
        "name": "Aleksib",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 9816,
        "team_name": "ENCE",
        "team_logo": "https://static.hltv.org/images/team/logo/4869",
        "maps": 137,
        "rating": 1.01
    },
    {
        "name": "Domsterr",
        "country": "https://static.hltv.org/images/bigflags/30x20/ZA.gif",
        "id": 9310,
        "team_name": "ATK",
        "team_logo": "https://static.hltv.org/images/team/logo/9943",
        "maps": 142,
        "rating": 1.01
    },
    {
        "name": "grux",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 15096,
        "team_name": "Red Reserve",
        "team_logo": "https://static.hltv.org/images/team/logo/7613",
        "maps": 118,
        "rating": 1.01
    },
    {
        "name": "Shakezullah",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 14203,
        "team_name": "Singularity",
        "team_logo": "https://static.hltv.org/images/team/logo/6978",
        "maps": 190,
        "rating": 1.01
    },
    {
        "name": "fitch",
        "country": "https://static.hltv.org/images/bigflags/30x20/KZ.gif",
        "id": 10052,
        "team_name": "AVANGAR",
        "team_logo": "https://static.hltv.org/images/team/logo/8120",
        "maps": 133,
        "rating": 1.01
    },
    {
        "name": "MoeycQ",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 8770,
        "team_name": "MC",
        "team_logo": "https://static.hltv.org/images/team/logo/8738",
        "maps": 120,
        "rating": 1.0
    },
    {
        "name": "Lekr0",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 9261,
        "team_name": "NiP",
        "team_logo": "https://static.hltv.org/images/team/logo/4411",
        "maps": 184,
        "rating": 1.0
    },
    {
        "name": "KHRN",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 971,
        "team_name": "SJ",
        "team_logo": "https://static.hltv.org/images/team/logo/8504",
        "maps": 241,
        "rating": 1.0
    },
    {
        "name": "Noisia",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 11492,
        "team_name": "MC",
        "team_logo": "https://static.hltv.org/images/team/logo/8738",
        "maps": 123,
        "rating": 1.0
    },
    {
        "name": "phr",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 11891,
        "team_name": "AGO",
        "team_logo": "https://static.hltv.org/images/team/logo/8068",
        "maps": 342,
        "rating": 1.0
    },
    {
        "name": "Vegi",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 15204,
        "team_name": "Virtus.pro",
        "team_logo": "https://static.hltv.org/images/team/logo/5378",
        "maps": 257,
        "rating": 1.0
    },
    {
        "name": "RpK",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 7169,
        "team_name": "Vitality",
        "team_logo": "https://static.hltv.org/images/team/logo/9565",
        "maps": 270,
        "rating": 1.0
    },
    {
        "name": "mynio",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 4829,
        "team_name": "Wisla Krakow",
        "team_logo": "https://static.hltv.org/images/team/logo/10426",
        "maps": 116,
        "rating": 1.0
    },
    {
        "name": "vanity",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 12089,
        "team_name": "eUnited",
        "team_logo": "https://static.hltv.org/images/team/logo/7106",
        "maps": 153,
        "rating": 1.0
    },
    {
        "name": "ableJ",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 16770,
        "team_name": "FURIA",
        "team_logo": "https://static.hltv.org/images/team/logo/8297",
        "maps": 211,
        "rating": 1.0
    },
    {
        "name": "cajunb",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 2469,
        "team_name": "North",
        "team_logo": "https://static.hltv.org/images/team/logo/7533",
        "maps": 168,
        "rating": 1.0
    },
    {
        "name": "zander",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 9876,
        "team_name": "Rugratz",
        "team_logo": "https://static.hltv.org/images/team/logo/10017",
        "maps": 132,
        "rating": 1.0
    },
    {
        "name": "Gratisfaction",
        "country": "https://static.hltv.org/images/bigflags/30x20/NZ.gif",
        "id": 9686,
        "team_name": "100 Thieves",
        "team_logo": "https://static.hltv.org/images/team/logo/8474",
        "maps": 124,
        "rating": 1.0
    },
    {
        "name": "gade",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 8875,
        "team_name": "North",
        "team_logo": "https://static.hltv.org/images/team/logo/7533",
        "maps": 182,
        "rating": 1.0
    },
    {
        "name": "RuStY",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 10784,
        "team_name": "GamerLegion",
        "team_logo": "https://static.hltv.org/images/team/logo/9928",
        "maps": 249,
        "rating": 1.0
    },
    {
        "name": "LOGAN",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 13042,
        "team_name": "Heretics",
        "team_logo": "https://static.hltv.org/images/team/logo/8346",
        "maps": 245,
        "rating": 1.0
    },
    {
        "name": "Twixie",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 15180,
        "team_name": "HAVU",
        "team_logo": "https://static.hltv.org/images/team/logo/7865",
        "maps": 214,
        "rating": 0.99
    },
    {
        "name": "wannafly",
        "country": "https://static.hltv.org/images/bigflags/30x20/TH.gif",
        "id": 13461,
        "team_name": "Lucid Dream",
        "team_logo": "https://static.hltv.org/images/team/logo/8680",
        "maps": 148,
        "rating": 0.99
    },
    {
        "name": "Snax",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 2553,
        "team_name": "Virtus.pro",
        "team_logo": "https://static.hltv.org/images/team/logo/5378",
        "maps": 265,
        "rating": 0.99
    },
    {
        "name": "DeStiNy",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 9483,
        "team_name": "INTZ",
        "team_logo": "https://static.hltv.org/images/team/logo/6619",
        "maps": 154,
        "rating": 0.99
    },
    {
        "name": "Rock1nG",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 10762,
        "team_name": "SKADE",
        "team_logo": "https://static.hltv.org/images/team/logo/10386",
        "maps": 133,
        "rating": 0.99
    },
    {
        "name": "MSL",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 7156,
        "team_name": "OpTic",
        "team_logo": "https://static.hltv.org/images/team/logo/6615",
        "maps": 121,
        "rating": 0.99
    },
    {
        "name": "Fadey",
        "country": "https://static.hltv.org/images/bigflags/30x20/ZA.gif",
        "id": 10611,
        "team_name": "ATK",
        "team_logo": "https://static.hltv.org/images/team/logo/9943",
        "maps": 158,
        "rating": 0.99
    },
    {
        "name": "xseveN",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 7248,
        "team_name": "ENCE",
        "team_logo": "https://static.hltv.org/images/team/logo/4869",
        "maps": 167,
        "rating": 0.99
    },
    {
        "name": "AcilioN",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 8151,
        "team_name": "Copenhagen Flames",
        "team_logo": "https://static.hltv.org/images/team/logo/7461",
        "maps": 136,
        "rating": 0.99
    },
    {
        "name": "Marek",
        "country": "https://static.hltv.org/images/bigflags/30x20/TW.gif",
        "id": 8598,
        "team_name": "EHOME",
        "team_logo": "https://static.hltv.org/images/team/logo/7024",
        "maps": 131,
        "rating": 0.99
    },
    {
        "name": "OKOLICIOUZ",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 11652,
        "team_name": "Unicorns of Love",
        "team_logo": "https://static.hltv.org/images/team/logo/9812",
        "maps": 142,
        "rating": 0.99
    },
    {
        "name": "Edward",
        "country": "https://static.hltv.org/images/bigflags/30x20/UA.gif",
        "id": 483,
        "team_name": "Natus Vincere",
        "team_logo": "https://static.hltv.org/images/team/logo/4608",
        "maps": 123,
        "rating": 0.99
    },
    {
        "name": "neptune",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 12101,
        "team_name": "Swole Patrol",
        "team_logo": "https://static.hltv.org/images/team/logo/7726",
        "maps": 121,
        "rating": 0.99
    },
    {
        "name": "LETN1",
        "country": "https://static.hltv.org/images/bigflags/30x20/RS.gif",
        "id": 4216,
        "team_name": "CR4ZY",
        "team_logo": "https://static.hltv.org/images/team/logo/10150",
        "maps": 284,
        "rating": 0.98
    },
    {
        "name": "v1c7oR",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 7834,
        "team_name": "Windigo",
        "team_logo": "https://static.hltv.org/images/team/logo/8513",
        "maps": 233,
        "rating": 0.98
    },
    {
        "name": "chopper",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 7716,
        "team_name": "Spirit",
        "team_logo": "https://static.hltv.org/images/team/logo/7020",
        "maps": 211,
        "rating": 0.98
    },
    {
        "name": "KrizzeN",
        "country": "https://static.hltv.org/images/bigflags/30x20/KZ.gif",
        "id": 12161,
        "team_name": "Winstrike",
        "team_logo": "https://static.hltv.org/images/team/logo/9183",
        "maps": 124,
        "rating": 0.98
    },
    {
        "name": "Lucaozy",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 18717,
        "team_name": "DETONA",
        "team_logo": "https://static.hltv.org/images/team/logo/8902",
        "maps": 139,
        "rating": 0.98
    },
    {
        "name": "RUBINO",
        "country": "https://static.hltv.org/images/bigflags/30x20/NO.gif",
        "id": 1485,
        "team_name": "Nordavind",
        "team_logo": "https://static.hltv.org/images/team/logo/8769",
        "maps": 152,
        "rating": 0.98
    },
    {
        "name": "aVN",
        "country": "https://static.hltv.org/images/bigflags/30x20/RS.gif",
        "id": 5351,
        "team_name": "Juggernauts",
        "team_logo": "https://static.hltv.org/images/team/logo/10509",
        "maps": 122,
        "rating": 0.97
    },
    {
        "name": "SANJI",
        "country": "https://static.hltv.org/images/bigflags/30x20/UZ.gif",
        "id": 11716,
        "team_name": "AVANGAR",
        "team_logo": "https://static.hltv.org/images/team/logo/8120",
        "maps": 270,
        "rating": 0.97
    },
    {
        "name": "AZR",
        "country": "https://static.hltv.org/images/bigflags/30x20/AU.gif",
        "id": 8082,
        "team_name": "100 Thieves",
        "team_logo": "https://static.hltv.org/images/team/logo/8474",
        "maps": 148,
        "rating": 0.97
    },
    {
        "name": "rafftu",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 16412,
        "team_name": "SKADE",
        "team_logo": "https://static.hltv.org/images/team/logo/10386",
        "maps": 119,
        "rating": 0.97
    },
    {
        "name": "Keoz",
        "country": "https://static.hltv.org/images/bigflags/30x20/BE.gif",
        "id": 15117,
        "team_name": "Syman",
        "team_logo": "https://static.hltv.org/images/team/logo/8772",
        "maps": 164,
        "rating": 0.97
    },
    {
        "name": "Kvik",
        "country": "https://static.hltv.org/images/bigflags/30x20/LT.gif",
        "id": 8459,
        "team_name": "Winstrike",
        "team_logo": "https://static.hltv.org/images/team/logo/9183",
        "maps": 205,
        "rating": 0.97
    },
    {
        "name": "bubble",
        "country": "https://static.hltv.org/images/bigflags/30x20/BG.gif",
        "id": 2799,
        "team_name": "Windigo",
        "team_logo": "https://static.hltv.org/images/team/logo/8513",
        "maps": 252,
        "rating": 0.97
    },
    {
        "name": "xartE",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 7537,
        "team_name": "SJ",
        "team_logo": "https://static.hltv.org/images/team/logo/8504",
        "maps": 249,
        "rating": 0.96
    },
    {
        "name": "ben1337",
        "country": "https://static.hltv.org/images/bigflags/30x20/US.gif",
        "id": 13250,
        "team_name": "Party Astronauts",
        "team_logo": "https://static.hltv.org/images/team/logo/8038",
        "maps": 151,
        "rating": 0.96
    },
    {
        "name": "RAiLWAY",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 14161,
        "team_name": "Espada",
        "team_logo": "https://static.hltv.org/images/team/logo/8669",
        "maps": 135,
        "rating": 0.96
    },
    {
        "name": "TACO",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 9217,
        "team_name": "MIBR",
        "team_logo": "https://static.hltv.org/images/team/logo/9215",
        "maps": 188,
        "rating": 0.96
    },
    {
        "name": "B1NGO",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 16778,
        "team_name": "EHOME",
        "team_logo": "https://static.hltv.org/images/team/logo/7024",
        "maps": 120,
        "rating": 0.96
    },
    {
        "name": "kenzor",
        "country": "https://static.hltv.org/images/bigflags/30x20/UA.gif",
        "id": 11515,
        "team_name": "pro100",
        "team_logo": "https://static.hltv.org/images/team/logo/7898",
        "maps": 126,
        "rating": 0.96
    },
    {
        "name": "JiNKZ",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 15120,
        "team_name": "Heretics",
        "team_logo": "https://static.hltv.org/images/team/logo/8346",
        "maps": 284,
        "rating": 0.95
    },
    {
        "name": "karrigan",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 429,
        "team_name": "mousesports",
        "team_logo": "https://static.hltv.org/images/team/logo/4494",
        "maps": 218,
        "rating": 0.95
    },
    {
        "name": "FIOURN",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 14140,
        "team_name": "EHOME",
        "team_logo": "https://static.hltv.org/images/team/logo/7024",
        "maps": 136,
        "rating": 0.95
    },
    {
        "name": "lunAtic",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 9798,
        "team_name": "PACT",
        "team_logo": "https://static.hltv.org/images/team/logo/8248",
        "maps": 213,
        "rating": 0.95
    },
    {
        "name": "AdreN",
        "country": "https://static.hltv.org/images/bigflags/30x20/KZ.gif",
        "id": 334,
        "team_name": "AVANGAR",
        "team_logo": "https://static.hltv.org/images/team/logo/8120",
        "maps": 217,
        "rating": 0.94
    },
    {
        "name": "devoduvek",
        "country": "https://static.hltv.org/images/bigflags/30x20/FR.gif",
        "id": 10569,
        "team_name": "Heretics",
        "team_logo": "https://static.hltv.org/images/team/logo/8346",
        "maps": 153,
        "rating": 0.94
    },
    {
        "name": "tiziaN",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 5796,
        "team_name": "BIG",
        "team_logo": "https://static.hltv.org/images/team/logo/7532",
        "maps": 192,
        "rating": 0.94
    },
    {
        "name": "t0rick",
        "country": "https://static.hltv.org/images/bigflags/30x20/AZ.gif",
        "id": 9382,
        "team_name": "Syman",
        "team_logo": "https://static.hltv.org/images/team/logo/8772",
        "maps": 135,
        "rating": 0.94
    },
    {
        "name": "HooXi",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 10096,
        "team_name": "Copenhagen Flames",
        "team_logo": "https://static.hltv.org/images/team/logo/7461",
        "maps": 140,
        "rating": 0.94
    },
    {
        "name": "TaZ",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 161,
        "team_name": "ARCY",
        "team_logo": "https://static.hltv.org/images/team/logo/10494",
        "maps": 209,
        "rating": 0.93
    },
    {
        "name": "Golden",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 11110,
        "team_name": "fnatic",
        "team_logo": "https://static.hltv.org/images/team/logo/4991",
        "maps": 143,
        "rating": 0.93
    },
    {
        "name": "sAw",
        "country": "https://static.hltv.org/images/bigflags/30x20/FI.gif",
        "id": 7821,
        "team_name": "HAVU",
        "team_logo": "https://static.hltv.org/images/team/logo/7865",
        "maps": 294,
        "rating": 0.93
    },
    {
        "name": "wayLander",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 7796,
        "team_name": "pro100",
        "team_logo": "https://static.hltv.org/images/team/logo/7898",
        "maps": 209,
        "rating": 0.93
    },
    {
        "name": "GeT_RiGhT",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 39,
        "team_name": "NiP",
        "team_logo": "https://static.hltv.org/images/team/logo/4411",
        "maps": 128,
        "rating": 0.92
    },
    {
        "name": "nak",
        "country": "https://static.hltv.org/images/bigflags/30x20/BR.gif",
        "id": 169,
        "team_name": "RED Canids",
        "team_logo": "https://static.hltv.org/images/team/logo/7176",
        "maps": 119,
        "rating": 0.92
    },
    {
        "name": "ANGE1",
        "country": "https://static.hltv.org/images/bigflags/30x20/UA.gif",
        "id": 339,
        "team_name": "HellRaisers",
        "team_logo": "https://static.hltv.org/images/team/logo/5310",
        "maps": 156,
        "rating": 0.92
    },
    {
        "name": "Xizt",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 884,
        "team_name": "fnatic",
        "team_logo": "https://static.hltv.org/images/team/logo/4991",
        "maps": 116,
        "rating": 0.91
    },
    {
        "name": "S0tF1k",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 9081,
        "team_name": "Spirit",
        "team_logo": "https://static.hltv.org/images/team/logo/7020",
        "maps": 135,
        "rating": 0.91
    },
    {
        "name": "kRYSTAL",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 7218,
        "team_name": "GODSENT",
        "team_logo": "https://static.hltv.org/images/team/logo/6902",
        "maps": 272,
        "rating": 0.91
    },
    {
        "name": "djL",
        "country": "https://static.hltv.org/images/bigflags/30x20/SE.gif",
        "id": 12572,
        "team_name": "Japaleno",
        "team_logo": "https://static.hltv.org/images/team/logo/7144",
        "maps": 256,
        "rating": 0.9
    },
    {
        "name": "ScrunK",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 8212,
        "team_name": "expert",
        "team_logo": "https://static.hltv.org/images/team/logo/9393",
        "maps": 120,
        "rating": 0.9
    },
    {
        "name": "daps",
        "country": "https://static.hltv.org/images/bigflags/30x20/CA.gif",
        "id": 8521,
        "team_name": "NRG",
        "team_logo": "https://static.hltv.org/images/team/logo/6673",
        "maps": 140,
        "rating": 0.89
    },
    {
        "name": "alecks",
        "country": "https://static.hltv.org/images/bigflags/30x20/SG.gif",
        "id": 9170,
        "team_name": "BOOT",
        "team_logo": "https://static.hltv.org/images/team/logo/6898",
        "maps": 150,
        "rating": 0.88
    },
    {
        "name": "nawrot",
        "country": "https://static.hltv.org/images/bigflags/30x20/PL.gif",
        "id": 15726,
        "team_name": "Izako Boars",
        "team_logo": "https://static.hltv.org/images/team/logo/7681",
        "maps": 136,
        "rating": 0.88
    },
    {
        "name": "crush",
        "country": "https://static.hltv.org/images/bigflags/30x20/UA.gif",
        "id": 9348,
        "team_name": "HellRaisers",
        "team_logo": "https://static.hltv.org/images/team/logo/5310",
        "maps": 146,
        "rating": 0.87
    },
    {
        "name": "PASHANOJ",
        "country": "https://static.hltv.org/images/bigflags/30x20/RU.gif",
        "id": 13779,
        "team_name": "Unique",
        "team_logo": "https://static.hltv.org/images/team/logo/9287",
        "maps": 206,
        "rating": 0.87
    },
    {
        "name": "HUNDEN",
        "country": "https://static.hltv.org/images/bigflags/30x20/DK.gif",
        "id": 7415,
        "team_name": "Tricked",
        "team_logo": "https://static.hltv.org/images/team/logo/4602",
        "maps": 328,
        "rating": 0.87
    },
    {
        "name": "advent",
        "country": "https://static.hltv.org/images/bigflags/30x20/CN.gif",
        "id": 8600,
        "team_name": "ViCi",
        "team_logo": "https://static.hltv.org/images/team/logo/7606",
        "maps": 187,
        "rating": 0.86
    },
    {
        "name": "DuDe",
        "country": "https://static.hltv.org/images/bigflags/30x20/DE.gif",
        "id": 10980,
        "team_name": "ALTERNATE aTTaX",
        "team_logo": "https://static.hltv.org/images/team/logo/4501",
        "maps": 181,
        "rating": 0.82
    }              
            ]
        }
    }
}
</script>
<style>
@media only screen and (max-width: 768px){
    .b-table .table {
        max-width:320px !important;
        margin:0 auto;
    }
    .player-name {
        font-size:0.8rem !important;
    }
    .flag-table {
        max-width: 20px !important;
        min-width: 20px !important;
        margin-top:5px !important;
    }    
}
    .table tr.is-selected td {
        background-color:#232d38 !important;
    }
    .players-table {
        max-width: 700px;
        margin:0 auto;
    }
    .rating {
        font-weight: bold;
    }
    .negative {
        color:darkred;
    }
    .flag-table {
        max-width: 32px;
        min-width: 32px;
    }
    .team-logo-table {
        padding-right:5px;
    }
</style>