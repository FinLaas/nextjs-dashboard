"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(rsc)/./node_modules/@vercel/postgres/dist/chunk-VGUHM5WG.js":
/*!**************************************************************!*\
  !*** ./node_modules/@vercel/postgres/dist/chunk-VGUHM5WG.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VercelClient: () => (/* binding */ VercelClient),\n/* harmony export */   VercelPool: () => (/* binding */ VercelPool),\n/* harmony export */   createClient: () => (/* binding */ createClient),\n/* harmony export */   createPool: () => (/* binding */ createPool),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   postgresConnectionString: () => (/* binding */ postgresConnectionString),\n/* harmony export */   sql: () => (/* binding */ sql)\n/* harmony export */ });\n/* harmony import */ var _neondatabase_serverless__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @neondatabase/serverless */ \"(rsc)/./node_modules/@neondatabase/serverless/index.mjs\");\n// src/create-pool.ts\n\n// src/error.ts\nvar VercelPostgresError = class extends Error {\n    constructor(code, message){\n        super(`VercelPostgresError - '${code}': ${message}`);\n        this.code = code;\n        this.name = \"VercelPostgresError\";\n    }\n};\n// src/postgres-connection-string.ts\nfunction postgresConnectionString(type = \"pool\") {\n    let connectionString;\n    switch(type){\n        case \"pool\":\n            {\n                connectionString = process.env.POSTGRES_URL;\n                break;\n            }\n        case \"direct\":\n            {\n                connectionString = process.env.POSTGRES_URL_NON_POOLING;\n                break;\n            }\n        default:\n            {\n                const _exhaustiveCheck = type;\n                const str = _exhaustiveCheck;\n                throw new VercelPostgresError(\"invalid_connection_type\", `Unhandled type: ${str}`);\n            }\n    }\n    if (connectionString === \"undefined\") connectionString = void 0;\n    return connectionString;\n}\nfunction isPooledConnectionString(connectionString) {\n    return connectionString.includes(\"-pooler.\");\n}\nfunction isDirectConnectionString(connectionString) {\n    return !isPooledConnectionString(connectionString);\n}\nfunction isLocalhostConnectionString(connectionString) {\n    try {\n        const withHttpsProtocol = connectionString.startsWith(\"postgresql://\") ? connectionString.replace(\"postgresql://\", \"https://\") : connectionString;\n        return new URL(withHttpsProtocol).hostname === \"localhost\";\n    } catch (err) {\n        if (err instanceof TypeError) {\n            return false;\n        }\n        if (typeof err === \"object\" && err !== null && \"message\" in err && typeof err.message === \"string\" && err.message === \"Invalid URL\") {\n            return false;\n        }\n        throw err;\n    }\n}\n// src/sql-template.ts\nfunction sqlTemplate(strings, ...values) {\n    var _a, _b;\n    if (!isTemplateStringsArray(strings) || !Array.isArray(values)) {\n        throw new VercelPostgresError(\"incorrect_tagged_template_call\", \"It looks like you tried to call `sql` as a function. Make sure to use it as a tagged template.\\n\tExample: sql`SELECT * FROM users`, not sql('SELECT * FROM users')\");\n    }\n    let result = (_a = strings[0]) != null ? _a : \"\";\n    for(let i = 1; i < strings.length; i++){\n        result += `$${i}${(_b = strings[i]) != null ? _b : \"\"}`;\n    }\n    return [\n        result,\n        values\n    ];\n}\nfunction isTemplateStringsArray(strings) {\n    return Array.isArray(strings) && \"raw\" in strings && Array.isArray(strings.raw);\n}\n// src/create-client.ts\n\nvar VercelClient = class extends _neondatabase_serverless__WEBPACK_IMPORTED_MODULE_0__.Client {\n    /**\n   * A template literal tag providing safe, easy to use SQL parameterization.\n   * Parameters are substituted using the underlying Postgres database, and so must follow\n   * the rules of Postgres parameterization.\n   * @example\n   * ```ts\n   * const pool = createClient();\n   * const userId = 123;\n   * await client.connect();\n   * const result = await pool.sql`SELECT * FROM users WHERE id = ${userId}`;\n   * // Equivalent to: await pool.query('SELECT * FROM users WHERE id = $1', [id]);\n   * await client.end();\n   * ```\n   * @returns A promise that resolves to the query result.\n   */ async sql(strings, ...values) {\n        const [query, params] = sqlTemplate(strings, ...values);\n        return this.query(query, params);\n    }\n};\nfunction createClient(config) {\n    var _a;\n    const connectionString = (_a = config == null ? void 0 : config.connectionString) != null ? _a : postgresConnectionString(\"direct\");\n    if (!connectionString) throw new VercelPostgresError(\"missing_connection_string\", \"You did not supply a 'connectionString' and no 'POSTGRES_URL_NON_POOLING' env var was found.\");\n    if (!isLocalhostConnectionString(connectionString) && !isDirectConnectionString(connectionString)) throw new VercelPostgresError(\"invalid_connection_string\", \"This connection string is meant to be used with a pooled connection. Try `createPool()` instead.\");\n    return new VercelClient({\n        ...config,\n        connectionString\n    });\n}\n// src/create-pool.ts\nvar VercelPool = class extends _neondatabase_serverless__WEBPACK_IMPORTED_MODULE_0__.Pool {\n    constructor(config){\n        var _a;\n        super(config);\n        this.Client = VercelClient;\n        this.connectionString = (_a = config.connectionString) != null ? _a : \"\";\n    }\n    /**\n   * A template literal tag providing safe, easy to use SQL parameterization.\n   * Parameters are substituted using the underlying Postgres database, and so must follow\n   * the rules of Postgres parameterization.\n   * @example\n   * ```ts\n   * const pool = createPool();\n   * const userId = 123;\n   * const result = await pool.sql`SELECT * FROM users WHERE id = ${userId}`;\n   * // Equivalent to: await pool.query('SELECT * FROM users WHERE id = $1', [id]);\n   * ```\n   * @returns A promise that resolves to the query result.\n   */ async sql(strings, ...values) {\n        const [query, params] = sqlTemplate(strings, ...values);\n        const sql2 = (0,_neondatabase_serverless__WEBPACK_IMPORTED_MODULE_0__.neon)(this.connectionString, {\n            fullResults: true\n        });\n        return sql2(query, params);\n    }\n    connect(callback) {\n        return super.connect(callback);\n    }\n};\nfunction createPool(config) {\n    var _a;\n    const connectionString = (_a = config == null ? void 0 : config.connectionString) != null ? _a : postgresConnectionString(\"pool\");\n    if (!connectionString) throw new VercelPostgresError(\"missing_connection_string\", \"You did not supply a 'connectionString' and no 'POSTGRES_URL' env var was found.\");\n    if (!isLocalhostConnectionString(connectionString) && !isPooledConnectionString(connectionString)) throw new VercelPostgresError(\"invalid_connection_string\", \"This connection string is meant to be used with a direct connection. Make sure to use a pooled connection string or try `createClient()` instead.\");\n    let maxUses = config == null ? void 0 : config.maxUses;\n    let max = config == null ? void 0 : config.max;\n    if (typeof EdgeRuntime !== \"undefined\") {\n        if (maxUses && maxUses !== 1) {\n            console.warn(\"@vercel/postgres: Overriding `maxUses` to 1 because the EdgeRuntime does not support client reuse.\");\n        }\n        if (max && max !== 1e4) {\n            console.warn(\"@vercel/postgres: Overriding `max` to 10,000 because the EdgeRuntime does not support client reuse.\");\n        }\n        maxUses = 1;\n        max = 1e4;\n    }\n    const pool2 = new VercelPool({\n        ...config,\n        connectionString,\n        maxUses,\n        max\n    });\n    return pool2;\n}\n// src/index.ts\nvar pool;\nvar sql = new Proxy(// eslint-disable-next-line @typescript-eslint/no-empty-function -- [@vercel/style-guide@5 migration]\n()=>{}, {\n    get (_, prop) {\n        if (!pool) {\n            pool = createPool();\n        }\n        const val = Reflect.get(pool, prop);\n        if (typeof val === \"function\") {\n            return val.bind(pool);\n        }\n        return val;\n    },\n    apply (_, __, argumentsList) {\n        if (!pool) {\n            pool = createPool();\n        }\n        return pool.sql(...argumentsList);\n    }\n});\nvar db = sql;\n //# sourceMappingURL=chunk-VGUHM5WG.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9wb3N0Z3Jlcy9kaXN0L2NodW5rLVZHVUhNNVdHLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFCO0FBQ2lDO0FBRXRELGVBQWU7QUFDZixJQUFJRSxzQkFBc0IsY0FBY0M7SUFDdENDLFlBQVlDLElBQUksRUFBRUMsT0FBTyxDQUFFO1FBQ3pCLEtBQUssQ0FBQyxDQUFDLHVCQUF1QixFQUFFRCxLQUFLLEdBQUcsRUFBRUMsUUFBUSxDQUFDO1FBQ25ELElBQUksQ0FBQ0QsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0UsSUFBSSxHQUFHO0lBQ2Q7QUFDRjtBQUVBLG9DQUFvQztBQUNwQyxTQUFTQyx5QkFBeUJDLE9BQU8sTUFBTTtJQUM3QyxJQUFJQztJQUNKLE9BQVFEO1FBQ04sS0FBSztZQUFRO2dCQUNYQyxtQkFBbUJDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtnQkFDM0M7WUFDRjtRQUNBLEtBQUs7WUFBVTtnQkFDYkgsbUJBQW1CQyxRQUFRQyxHQUFHLENBQUNFLHdCQUF3QjtnQkFDdkQ7WUFDRjtRQUNBO1lBQVM7Z0JBQ1AsTUFBTUMsbUJBQW1CTjtnQkFDekIsTUFBTU8sTUFBTUQ7Z0JBQ1osTUFBTSxJQUFJYixvQkFDUiwyQkFDQSxDQUFDLGdCQUFnQixFQUFFYyxJQUFJLENBQUM7WUFFNUI7SUFDRjtJQUNBLElBQUlOLHFCQUFxQixhQUN2QkEsbUJBQW1CLEtBQUs7SUFDMUIsT0FBT0E7QUFDVDtBQUNBLFNBQVNPLHlCQUF5QlAsZ0JBQWdCO0lBQ2hELE9BQU9BLGlCQUFpQlEsUUFBUSxDQUFDO0FBQ25DO0FBQ0EsU0FBU0MseUJBQXlCVCxnQkFBZ0I7SUFDaEQsT0FBTyxDQUFDTyx5QkFBeUJQO0FBQ25DO0FBQ0EsU0FBU1UsNEJBQTRCVixnQkFBZ0I7SUFDbkQsSUFBSTtRQUNGLE1BQU1XLG9CQUFvQlgsaUJBQWlCWSxVQUFVLENBQUMsbUJBQW1CWixpQkFBaUJhLE9BQU8sQ0FB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QUFPTyxLQUFLakIsR0FBRyxJQUFJMkI7SUFDckI7QUFDRjtBQUVGLElBQUlDLEtBQUs1QjtBQVVQLENBQ0YsMENBQTBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2ZXJjZWwvcG9zdGdyZXMvZGlzdC9jaHVuay1WR1VITTVXRy5qcz9jZWUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jcmVhdGUtcG9vbC50c1xuaW1wb3J0IHsgUG9vbCwgbmVvbiB9IGZyb20gXCJAbmVvbmRhdGFiYXNlL3NlcnZlcmxlc3NcIjtcblxuLy8gc3JjL2Vycm9yLnRzXG52YXIgVmVyY2VsUG9zdGdyZXNFcnJvciA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcihjb2RlLCBtZXNzYWdlKSB7XG4gICAgc3VwZXIoYFZlcmNlbFBvc3RncmVzRXJyb3IgLSAnJHtjb2RlfSc6ICR7bWVzc2FnZX1gKTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMubmFtZSA9IFwiVmVyY2VsUG9zdGdyZXNFcnJvclwiO1xuICB9XG59O1xuXG4vLyBzcmMvcG9zdGdyZXMtY29ubmVjdGlvbi1zdHJpbmcudHNcbmZ1bmN0aW9uIHBvc3RncmVzQ29ubmVjdGlvblN0cmluZyh0eXBlID0gXCJwb29sXCIpIHtcbiAgbGV0IGNvbm5lY3Rpb25TdHJpbmc7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgXCJwb29sXCI6IHtcbiAgICAgIGNvbm5lY3Rpb25TdHJpbmcgPSBwcm9jZXNzLmVudi5QT1NUR1JFU19VUkw7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImRpcmVjdFwiOiB7XG4gICAgICBjb25uZWN0aW9uU3RyaW5nID0gcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVJMX05PTl9QT09MSU5HO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IF9leGhhdXN0aXZlQ2hlY2sgPSB0eXBlO1xuICAgICAgY29uc3Qgc3RyID0gX2V4aGF1c3RpdmVDaGVjaztcbiAgICAgIHRocm93IG5ldyBWZXJjZWxQb3N0Z3Jlc0Vycm9yKFxuICAgICAgICBcImludmFsaWRfY29ubmVjdGlvbl90eXBlXCIsXG4gICAgICAgIGBVbmhhbmRsZWQgdHlwZTogJHtzdHJ9YFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbm5lY3Rpb25TdHJpbmcgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgY29ubmVjdGlvblN0cmluZyA9IHZvaWQgMDtcbiAgcmV0dXJuIGNvbm5lY3Rpb25TdHJpbmc7XG59XG5mdW5jdGlvbiBpc1Bvb2xlZENvbm5lY3Rpb25TdHJpbmcoY29ubmVjdGlvblN0cmluZykge1xuICByZXR1cm4gY29ubmVjdGlvblN0cmluZy5pbmNsdWRlcyhcIi1wb29sZXIuXCIpO1xufVxuZnVuY3Rpb24gaXNEaXJlY3RDb25uZWN0aW9uU3RyaW5nKGNvbm5lY3Rpb25TdHJpbmcpIHtcbiAgcmV0dXJuICFpc1Bvb2xlZENvbm5lY3Rpb25TdHJpbmcoY29ubmVjdGlvblN0cmluZyk7XG59XG5mdW5jdGlvbiBpc0xvY2FsaG9zdENvbm5lY3Rpb25TdHJpbmcoY29ubmVjdGlvblN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IHdpdGhIdHRwc1Byb3RvY29sID0gY29ubmVjdGlvblN0cmluZy5zdGFydHNXaXRoKFwicG9zdGdyZXNxbDovL1wiKSA/IGNvbm5lY3Rpb25TdHJpbmcucmVwbGFjZShcInBvc3RncmVzcWw6Ly9cIiwgXCJodHRwczovL1wiKSA6IGNvbm5lY3Rpb25TdHJpbmc7XG4gICAgcmV0dXJuIG5ldyBVUkwod2l0aEh0dHBzUHJvdG9jb2wpLmhvc3RuYW1lID09PSBcImxvY2FsaG9zdFwiO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZXJyID09PSBcIm9iamVjdFwiICYmIGVyciAhPT0gbnVsbCAmJiBcIm1lc3NhZ2VcIiBpbiBlcnIgJiYgdHlwZW9mIGVyci5tZXNzYWdlID09PSBcInN0cmluZ1wiICYmIGVyci5tZXNzYWdlID09PSBcIkludmFsaWQgVVJMXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhyb3cgZXJyO1xuICB9XG59XG5cbi8vIHNyYy9zcWwtdGVtcGxhdGUudHNcbmZ1bmN0aW9uIHNxbFRlbXBsYXRlKHN0cmluZ3MsIC4uLnZhbHVlcykge1xuICB2YXIgX2EsIF9iO1xuICBpZiAoIWlzVGVtcGxhdGVTdHJpbmdzQXJyYXkoc3RyaW5ncykgfHwgIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgIHRocm93IG5ldyBWZXJjZWxQb3N0Z3Jlc0Vycm9yKFxuICAgICAgXCJpbmNvcnJlY3RfdGFnZ2VkX3RlbXBsYXRlX2NhbGxcIixcbiAgICAgIFwiSXQgbG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gY2FsbCBgc3FsYCBhcyBhIGZ1bmN0aW9uLiBNYWtlIHN1cmUgdG8gdXNlIGl0IGFzIGEgdGFnZ2VkIHRlbXBsYXRlLlxcblx0RXhhbXBsZTogc3FsYFNFTEVDVCAqIEZST00gdXNlcnNgLCBub3Qgc3FsKCdTRUxFQ1QgKiBGUk9NIHVzZXJzJylcIlxuICAgICk7XG4gIH1cbiAgbGV0IHJlc3VsdCA9IChfYSA9IHN0cmluZ3NbMF0pICE9IG51bGwgPyBfYSA6IFwiXCI7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyaW5ncy5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdCArPSBgJCR7aX0keyhfYiA9IHN0cmluZ3NbaV0pICE9IG51bGwgPyBfYiA6IFwiXCJ9YDtcbiAgfVxuICByZXR1cm4gW3Jlc3VsdCwgdmFsdWVzXTtcbn1cbmZ1bmN0aW9uIGlzVGVtcGxhdGVTdHJpbmdzQXJyYXkoc3RyaW5ncykge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShzdHJpbmdzKSAmJiBcInJhd1wiIGluIHN0cmluZ3MgJiYgQXJyYXkuaXNBcnJheShzdHJpbmdzLnJhdyk7XG59XG5cbi8vIHNyYy9jcmVhdGUtY2xpZW50LnRzXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiQG5lb25kYXRhYmFzZS9zZXJ2ZXJsZXNzXCI7XG52YXIgVmVyY2VsQ2xpZW50ID0gY2xhc3MgZXh0ZW5kcyBDbGllbnQge1xuICAvKipcbiAgICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyBwcm92aWRpbmcgc2FmZSwgZWFzeSB0byB1c2UgU1FMIHBhcmFtZXRlcml6YXRpb24uXG4gICAqIFBhcmFtZXRlcnMgYXJlIHN1YnN0aXR1dGVkIHVzaW5nIHRoZSB1bmRlcmx5aW5nIFBvc3RncmVzIGRhdGFiYXNlLCBhbmQgc28gbXVzdCBmb2xsb3dcbiAgICogdGhlIHJ1bGVzIG9mIFBvc3RncmVzIHBhcmFtZXRlcml6YXRpb24uXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYHRzXG4gICAqIGNvbnN0IHBvb2wgPSBjcmVhdGVDbGllbnQoKTtcbiAgICogY29uc3QgdXNlcklkID0gMTIzO1xuICAgKiBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICAgKiBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnNxbGBTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGlkID0gJHt1c2VySWR9YDtcbiAgICogLy8gRXF1aXZhbGVudCB0bzogYXdhaXQgcG9vbC5xdWVyeSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBpZCA9ICQxJywgW2lkXSk7XG4gICAqIGF3YWl0IGNsaWVudC5lbmQoKTtcbiAgICogYGBgXG4gICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBxdWVyeSByZXN1bHQuXG4gICAqL1xuICBhc3luYyBzcWwoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gICAgY29uc3QgW3F1ZXJ5LCBwYXJhbXNdID0gc3FsVGVtcGxhdGUoc3RyaW5ncywgLi4udmFsdWVzKTtcbiAgICByZXR1cm4gdGhpcy5xdWVyeShxdWVyeSwgcGFyYW1zKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudChjb25maWcpIHtcbiAgdmFyIF9hO1xuICBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gKF9hID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuY29ubmVjdGlvblN0cmluZykgIT0gbnVsbCA/IF9hIDogcG9zdGdyZXNDb25uZWN0aW9uU3RyaW5nKFwiZGlyZWN0XCIpO1xuICBpZiAoIWNvbm5lY3Rpb25TdHJpbmcpXG4gICAgdGhyb3cgbmV3IFZlcmNlbFBvc3RncmVzRXJyb3IoXG4gICAgICBcIm1pc3NpbmdfY29ubmVjdGlvbl9zdHJpbmdcIixcbiAgICAgIFwiWW91IGRpZCBub3Qgc3VwcGx5IGEgJ2Nvbm5lY3Rpb25TdHJpbmcnIGFuZCBubyAnUE9TVEdSRVNfVVJMX05PTl9QT09MSU5HJyBlbnYgdmFyIHdhcyBmb3VuZC5cIlxuICAgICk7XG4gIGlmICghaXNMb2NhbGhvc3RDb25uZWN0aW9uU3RyaW5nKGNvbm5lY3Rpb25TdHJpbmcpICYmICFpc0RpcmVjdENvbm5lY3Rpb25TdHJpbmcoY29ubmVjdGlvblN0cmluZykpXG4gICAgdGhyb3cgbmV3IFZlcmNlbFBvc3RncmVzRXJyb3IoXG4gICAgICBcImludmFsaWRfY29ubmVjdGlvbl9zdHJpbmdcIixcbiAgICAgIFwiVGhpcyBjb25uZWN0aW9uIHN0cmluZyBpcyBtZWFudCB0byBiZSB1c2VkIHdpdGggYSBwb29sZWQgY29ubmVjdGlvbi4gVHJ5IGBjcmVhdGVQb29sKClgIGluc3RlYWQuXCJcbiAgICApO1xuICByZXR1cm4gbmV3IFZlcmNlbENsaWVudCh7XG4gICAgLi4uY29uZmlnLFxuICAgIGNvbm5lY3Rpb25TdHJpbmdcbiAgfSk7XG59XG5cbi8vIHNyYy9jcmVhdGUtcG9vbC50c1xudmFyIFZlcmNlbFBvb2wgPSBjbGFzcyBleHRlbmRzIFBvb2wge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB2YXIgX2E7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgICB0aGlzLkNsaWVudCA9IFZlcmNlbENsaWVudDtcbiAgICB0aGlzLmNvbm5lY3Rpb25TdHJpbmcgPSAoX2EgPSBjb25maWcuY29ubmVjdGlvblN0cmluZykgIT0gbnVsbCA/IF9hIDogXCJcIjtcbiAgfVxuICAvKipcbiAgICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyBwcm92aWRpbmcgc2FmZSwgZWFzeSB0byB1c2UgU1FMIHBhcmFtZXRlcml6YXRpb24uXG4gICAqIFBhcmFtZXRlcnMgYXJlIHN1YnN0aXR1dGVkIHVzaW5nIHRoZSB1bmRlcmx5aW5nIFBvc3RncmVzIGRhdGFiYXNlLCBhbmQgc28gbXVzdCBmb2xsb3dcbiAgICogdGhlIHJ1bGVzIG9mIFBvc3RncmVzIHBhcmFtZXRlcml6YXRpb24uXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYHRzXG4gICAqIGNvbnN0IHBvb2wgPSBjcmVhdGVQb29sKCk7XG4gICAqIGNvbnN0IHVzZXJJZCA9IDEyMztcbiAgICogY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9vbC5zcWxgU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBpZCA9ICR7dXNlcklkfWA7XG4gICAqIC8vIEVxdWl2YWxlbnQgdG86IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgaWQgPSAkMScsIFtpZF0pO1xuICAgKiBgYGBcbiAgICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHF1ZXJ5IHJlc3VsdC5cbiAgICovXG4gIGFzeW5jIHNxbChzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgICBjb25zdCBbcXVlcnksIHBhcmFtc10gPSBzcWxUZW1wbGF0ZShzdHJpbmdzLCAuLi52YWx1ZXMpO1xuICAgIGNvbnN0IHNxbDIgPSBuZW9uKHRoaXMuY29ubmVjdGlvblN0cmluZywge1xuICAgICAgZnVsbFJlc3VsdHM6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gc3FsMihxdWVyeSwgcGFyYW1zKTtcbiAgfVxuICBjb25uZWN0KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHN1cGVyLmNvbm5lY3QoXG4gICAgICBjYWxsYmFja1xuICAgICk7XG4gIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVQb29sKGNvbmZpZykge1xuICB2YXIgX2E7XG4gIGNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSAoX2EgPSBjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5jb25uZWN0aW9uU3RyaW5nKSAhPSBudWxsID8gX2EgOiBwb3N0Z3Jlc0Nvbm5lY3Rpb25TdHJpbmcoXCJwb29sXCIpO1xuICBpZiAoIWNvbm5lY3Rpb25TdHJpbmcpXG4gICAgdGhyb3cgbmV3IFZlcmNlbFBvc3RncmVzRXJyb3IoXG4gICAgICBcIm1pc3NpbmdfY29ubmVjdGlvbl9zdHJpbmdcIixcbiAgICAgIFwiWW91IGRpZCBub3Qgc3VwcGx5IGEgJ2Nvbm5lY3Rpb25TdHJpbmcnIGFuZCBubyAnUE9TVEdSRVNfVVJMJyBlbnYgdmFyIHdhcyBmb3VuZC5cIlxuICAgICk7XG4gIGlmICghaXNMb2NhbGhvc3RDb25uZWN0aW9uU3RyaW5nKGNvbm5lY3Rpb25TdHJpbmcpICYmICFpc1Bvb2xlZENvbm5lY3Rpb25TdHJpbmcoY29ubmVjdGlvblN0cmluZykpXG4gICAgdGhyb3cgbmV3IFZlcmNlbFBvc3RncmVzRXJyb3IoXG4gICAgICBcImludmFsaWRfY29ubmVjdGlvbl9zdHJpbmdcIixcbiAgICAgIFwiVGhpcyBjb25uZWN0aW9uIHN0cmluZyBpcyBtZWFudCB0byBiZSB1c2VkIHdpdGggYSBkaXJlY3QgY29ubmVjdGlvbi4gTWFrZSBzdXJlIHRvIHVzZSBhIHBvb2xlZCBjb25uZWN0aW9uIHN0cmluZyBvciB0cnkgYGNyZWF0ZUNsaWVudCgpYCBpbnN0ZWFkLlwiXG4gICAgKTtcbiAgbGV0IG1heFVzZXMgPSBjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5tYXhVc2VzO1xuICBsZXQgbWF4ID0gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcubWF4O1xuICBpZiAodHlwZW9mIEVkZ2VSdW50aW1lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaWYgKG1heFVzZXMgJiYgbWF4VXNlcyAhPT0gMSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIkB2ZXJjZWwvcG9zdGdyZXM6IE92ZXJyaWRpbmcgYG1heFVzZXNgIHRvIDEgYmVjYXVzZSB0aGUgRWRnZVJ1bnRpbWUgZG9lcyBub3Qgc3VwcG9ydCBjbGllbnQgcmV1c2UuXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChtYXggJiYgbWF4ICE9PSAxZTQpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgXCJAdmVyY2VsL3Bvc3RncmVzOiBPdmVycmlkaW5nIGBtYXhgIHRvIDEwLDAwMCBiZWNhdXNlIHRoZSBFZGdlUnVudGltZSBkb2VzIG5vdCBzdXBwb3J0IGNsaWVudCByZXVzZS5cIlxuICAgICAgKTtcbiAgICB9XG4gICAgbWF4VXNlcyA9IDE7XG4gICAgbWF4ID0gMWU0O1xuICB9XG4gIGNvbnN0IHBvb2wyID0gbmV3IFZlcmNlbFBvb2woe1xuICAgIC4uLmNvbmZpZyxcbiAgICBjb25uZWN0aW9uU3RyaW5nLFxuICAgIG1heFVzZXMsXG4gICAgbWF4XG4gIH0pO1xuICByZXR1cm4gcG9vbDI7XG59XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIHBvb2w7XG52YXIgc3FsID0gbmV3IFByb3h5KFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uIC0tIFtAdmVyY2VsL3N0eWxlLWd1aWRlQDUgbWlncmF0aW9uXVxuICAoKSA9PiB7XG4gIH0sXG4gIHtcbiAgICBnZXQoXywgcHJvcCkge1xuICAgICAgaWYgKCFwb29sKSB7XG4gICAgICAgIHBvb2wgPSBjcmVhdGVQb29sKCk7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWwgPSBSZWZsZWN0LmdldChwb29sLCBwcm9wKTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5iaW5kKHBvb2wpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuICAgIGFwcGx5KF8sIF9fLCBhcmd1bWVudHNMaXN0KSB7XG4gICAgICBpZiAoIXBvb2wpIHtcbiAgICAgICAgcG9vbCA9IGNyZWF0ZVBvb2woKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwb29sLnNxbCguLi5hcmd1bWVudHNMaXN0KTtcbiAgICB9XG4gIH1cbik7XG52YXIgZGIgPSBzcWw7XG5cbmV4cG9ydCB7XG4gIHBvc3RncmVzQ29ubmVjdGlvblN0cmluZyxcbiAgVmVyY2VsQ2xpZW50LFxuICBjcmVhdGVDbGllbnQsXG4gIFZlcmNlbFBvb2wsXG4gIGNyZWF0ZVBvb2wsXG4gIHNxbCxcbiAgZGJcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaHVuay1WR1VITTVXRy5qcy5tYXAiXSwibmFtZXMiOlsiUG9vbCIsIm5lb24iLCJWZXJjZWxQb3N0Z3Jlc0Vycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsImNvZGUiLCJtZXNzYWdlIiwibmFtZSIsInBvc3RncmVzQ29ubmVjdGlvblN0cmluZyIsInR5cGUiLCJjb25uZWN0aW9uU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIlBPU1RHUkVTX1VSTCIsIlBPU1RHUkVTX1VSTF9OT05fUE9PTElORyIsIl9leGhhdXN0aXZlQ2hlY2siLCJzdHIiLCJpc1Bvb2xlZENvbm5lY3Rpb25TdHJpbmciLCJpbmNsdWRlcyIsImlzRGlyZWN0Q29ubmVjdGlvblN0cmluZyIsImlzTG9jYWxob3N0Q29ubmVjdGlvblN0cmluZyIsIndpdGhIdHRwc1Byb3RvY29sIiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJVUkwiLCJob3N0bmFtZSIsImVyciIsIlR5cGVFcnJvciIsInNxbFRlbXBsYXRlIiwic3RyaW5ncyIsInZhbHVlcyIsIl9hIiwiX2IiLCJpc1RlbXBsYXRlU3RyaW5nc0FycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInJhdyIsIkNsaWVudCIsIlZlcmNlbENsaWVudCIsInNxbCIsInF1ZXJ5IiwicGFyYW1zIiwiY3JlYXRlQ2xpZW50IiwiY29uZmlnIiwiVmVyY2VsUG9vbCIsInNxbDIiLCJmdWxsUmVzdWx0cyIsImNvbm5lY3QiLCJjYWxsYmFjayIsImNyZWF0ZVBvb2wiLCJtYXhVc2VzIiwibWF4IiwiRWRnZVJ1bnRpbWUiLCJjb25zb2xlIiwid2FybiIsInBvb2wyIiwicG9vbCIsIlByb3h5IiwiZ2V0IiwiXyIsInByb3AiLCJ2YWwiLCJSZWZsZWN0IiwiYmluZCIsImFwcGx5IiwiX18iLCJhcmd1bWVudHNMaXN0IiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@vercel/postgres/dist/chunk-VGUHM5WG.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/postgres/dist/index-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/@vercel/postgres/dist/index-node.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VercelClient: () => (/* reexport safe */ _chunk_VGUHM5WG_js__WEBPACK_IMPORTED_MODULE_0__.VercelClient),\n/* harmony export */   VercelPool: () => (/* reexport safe */ _chunk_VGUHM5WG_js__WEBPACK_IMPORTED_MODULE_0__.VercelPool),\n/* harmony export */   createClient: () => (/* reexport safe */ _chunk_VGUHM5WG_js__WEBPACK_IMPORTED_MODULE_0__.createClient),\n/* harmony export */   createPool: () => (/* reexport safe */ _chunk_VGUHM5WG_js__WEBPACK_IMPORTED_MODULE_0__.createPool),\n/* harmony export */   db: () => (/* reexport safe */ _chunk_VGUHM5WG_js__WEBPACK_IMPORTED_MODULE_0__.db),\n/* harmony export */   postgresConnectionString: () => (/* reexport safe */ _chunk_VGUHM5WG_js__WEBPACK_IMPORTED_MODULE_0__.postgresConnectionString),\n/* harmony export */   sql: () => (/* reexport safe */ _chunk_VGUHM5WG_js__WEBPACK_IMPORTED_MODULE_0__.sql)\n/* harmony export */ });\n/* harmony import */ var _chunk_VGUHM5WG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-VGUHM5WG.js */ \"(rsc)/./node_modules/@vercel/postgres/dist/chunk-VGUHM5WG.js\");\n/* harmony import */ var _neondatabase_serverless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neondatabase/serverless */ \"(rsc)/./node_modules/@neondatabase/serverless/index.mjs\");\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ws */ \"(rsc)/./node_modules/ws/wrapper.mjs\");\n\n// src/index-node.ts\n\n\nif (_neondatabase_serverless__WEBPACK_IMPORTED_MODULE_1__.neonConfig) {\n    _neondatabase_serverless__WEBPACK_IMPORTED_MODULE_1__.neonConfig.webSocketConstructor = ws__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n}\n //# sourceMappingURL=index-node.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9wb3N0Z3Jlcy9kaXN0L2luZGV4LW5vZGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVE2QjtBQUU3QixvQkFBb0I7QUFDa0M7QUFDbEM7QUFDcEIsSUFBSU8sZ0VBQVVBLEVBQUU7SUFDZEEsZ0VBQVVBLENBQUNFLG9CQUFvQixHQUFHRCwwQ0FBRUE7QUFDdEM7QUFTRSxDQUNGLHNDQUFzQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmVyY2VsL3Bvc3RncmVzL2Rpc3QvaW5kZXgtbm9kZS5qcz8xYThkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFZlcmNlbENsaWVudCxcbiAgVmVyY2VsUG9vbCxcbiAgY3JlYXRlQ2xpZW50LFxuICBjcmVhdGVQb29sLFxuICBkYixcbiAgcG9zdGdyZXNDb25uZWN0aW9uU3RyaW5nLFxuICBzcWxcbn0gZnJvbSBcIi4vY2h1bmstVkdVSE01V0cuanNcIjtcblxuLy8gc3JjL2luZGV4LW5vZGUudHNcbmltcG9ydCB7IG5lb25Db25maWcgfSBmcm9tIFwiQG5lb25kYXRhYmFzZS9zZXJ2ZXJsZXNzXCI7XG5pbXBvcnQgd3MgZnJvbSBcIndzXCI7XG5pZiAobmVvbkNvbmZpZykge1xuICBuZW9uQ29uZmlnLndlYlNvY2tldENvbnN0cnVjdG9yID0gd3M7XG59XG5leHBvcnQge1xuICBWZXJjZWxDbGllbnQsXG4gIFZlcmNlbFBvb2wsXG4gIGNyZWF0ZUNsaWVudCxcbiAgY3JlYXRlUG9vbCxcbiAgZGIsXG4gIHBvc3RncmVzQ29ubmVjdGlvblN0cmluZyxcbiAgc3FsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgtbm9kZS5qcy5tYXAiXSwibmFtZXMiOlsiVmVyY2VsQ2xpZW50IiwiVmVyY2VsUG9vbCIsImNyZWF0ZUNsaWVudCIsImNyZWF0ZVBvb2wiLCJkYiIsInBvc3RncmVzQ29ubmVjdGlvblN0cmluZyIsInNxbCIsIm5lb25Db25maWciLCJ3cyIsIndlYlNvY2tldENvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@vercel/postgres/dist/index-node.js\n");

/***/ })

};
;