goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__21151){
var vec__21152 = p__21151;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21152,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__21159 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21159,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__21166 = arguments.length;
switch (G__21166) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
}));

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
}));

(clojure.data.diff_associative.cljs$lang$maxFixedArity = 3);

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4273__auto__ = cljs.core.count(a);
var y__4274__auto__ = cljs.core.count(b);
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4487__auto__ = (((x == null))?null:x);
var m__4488__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4488__auto__.call(null,x));
} else {
var m__4485__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4485__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4487__auto__ = (((a == null))?null:a);
var m__4488__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4488__auto__.call(null,a,b));
} else {
var m__4485__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4485__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__21177_21257 = clojure.data.equality_partition;
var G__21178_21258 = "null";
var G__21179_21259 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__21177_21257,G__21178_21258,G__21179_21259);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__21182_21262 = clojure.data.equality_partition;
var G__21183_21263 = "string";
var G__21184_21264 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__21182_21262,G__21183_21263,G__21184_21264);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__21186_21265 = clojure.data.equality_partition;
var G__21187_21266 = "number";
var G__21188_21267 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__21186_21265,G__21187_21266,G__21188_21267);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__21189_21268 = clojure.data.equality_partition;
var G__21190_21269 = "array";
var G__21191_21270 = (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});
goog.object.set(G__21189_21268,G__21190_21269,G__21191_21270);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__21193_21273 = clojure.data.equality_partition;
var G__21194_21274 = "function";
var G__21195_21275 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__21193_21273,G__21194_21274,G__21195_21275);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__21198_21276 = clojure.data.equality_partition;
var G__21199_21277 = "boolean";
var G__21200_21278 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__21198_21276,G__21199_21277,G__21200_21278);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__21202_21279 = clojure.data.equality_partition;
var G__21203_21280 = "_";
var G__21204_21281 = (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});
goog.object.set(G__21202_21279,G__21203_21280,G__21204_21281);
goog.object.set(clojure.data.Diff,"null",true);

var G__21217_21282 = clojure.data.diff_similar;
var G__21218_21283 = "null";
var G__21219_21284 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__21217_21282,G__21218_21283,G__21219_21284);

goog.object.set(clojure.data.Diff,"string",true);

var G__21220_21285 = clojure.data.diff_similar;
var G__21221_21286 = "string";
var G__21222_21287 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__21220_21285,G__21221_21286,G__21222_21287);

goog.object.set(clojure.data.Diff,"number",true);

var G__21224_21288 = clojure.data.diff_similar;
var G__21225_21289 = "number";
var G__21226_21290 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__21224_21288,G__21225_21289,G__21226_21290);

goog.object.set(clojure.data.Diff,"array",true);

var G__21228_21291 = clojure.data.diff_similar;
var G__21229_21292 = "array";
var G__21230_21293 = (function (a,b){
return clojure.data.diff_sequential(a,b);
});
goog.object.set(G__21228_21291,G__21229_21292,G__21230_21293);

goog.object.set(clojure.data.Diff,"function",true);

var G__21231_21295 = clojure.data.diff_similar;
var G__21232_21296 = "function";
var G__21233_21297 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__21231_21295,G__21232_21296,G__21233_21297);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__21234_21299 = clojure.data.diff_similar;
var G__21235_21300 = "boolean";
var G__21236_21301 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__21234_21299,G__21235_21300,G__21236_21301);

goog.object.set(clojure.data.Diff,"_",true);

var G__21237_21302 = clojure.data.diff_similar;
var G__21238_21303 = "_";
var G__21239_21304 = (function (a,b){
var fexpr__21242 = (function (){var G__21243 = clojure.data.equality_partition(a);
var G__21243__$1 = (((G__21243 instanceof cljs.core.Keyword))?G__21243.fqn:null);
switch (G__21243__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21243__$1)].join('')));

}
})();
return (fexpr__21242.cljs$core$IFn$_invoke$arity$2 ? fexpr__21242.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__21242.call(null,a,b));
});
goog.object.set(G__21237_21302,G__21238_21303,G__21239_21304);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
