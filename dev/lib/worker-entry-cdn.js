/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assert;
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

function assert(test, message) {
  if (!test) {
    debugger;
    throw new Error(message);
  }
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shape_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_variable_js__ = __webpack_require__(25);
// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt




let nextVariableId = 0;

function addType(name, arg) {
  var lowerName = name[0].toLowerCase() + name.substring(1);
  Object.defineProperty(Type, `new${name}`, {
    value: function() {
      return new Type(name, arguments[0]);
    }});
  var upperArg = arg ? arg[0].toUpperCase() + arg.substring(1) : '';
  Object.defineProperty(Type.prototype, `${lowerName}${upperArg}`, {
    get: function() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(this[`is${name}`], `{${this.tag}, ${this.data}} is not of type ${name}`);
      return this.data;
    }});
  Object.defineProperty(Type.prototype, `is${name}`, {
    get: function() {
      return this.tag == name;
    }});
}

class Type {
  constructor(tag, data) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(typeof tag == 'string');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(data);
    if (tag == 'Entity') {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(data instanceof __WEBPACK_IMPORTED_MODULE_2__schema_js__["a" /* default */]);
    }
    if (tag == 'SetView') {
      if (!(data instanceof Type) && data.tag && data.data) {
        data = new Type(data.tag, data.data);
      }
    }
    this.tag = tag;
    this.data = data;
  }

  static newView(type) {
    console.warn('Type.newView is deprecated. Please use Type.newSetView instead');
    return Type.newSetView(type);
  }

  get isView() {
    console.warn('Type.isView is deprecated. Please use Type.isSetView instead');
    return this.isSetView;
  }

  get viewType() {
    console.warn('Type.viewType is deprecated. Please use Type.setViewType isntead');
    return this.setViewType;
  }

  viewOf() {
    console.warn('Type.viewOf is deprecated. Please use Type.setViewOf instead');
    return this.setViewOf();
  }

  get manifestReferenceName() {
    console.warn('Type.manifestReferenceName is deprecated. Please use Type.manifestReference instead');
    return this.manifestReference;
  }

  get variableReferenceName() {
    console.warn('Type.variableReferenceName is deprecated. Please use Type.variableReference instead');
    return this.variableReference;
  }

  get variableVariable() {
    console.warn('Type.variableVariable is deprecated. Please use Type.variable instead');
    return this.variable;
  }

  // Replaces variableReference types with variable types .
  assignVariableIds(variableMap) {
    if (this.isVariableReference) {
      var name = this.data;
      let sharedVariable = variableMap.get(name);
      if (sharedVariable == undefined) {
        let id = nextVariableId++;
        sharedVariable = new __WEBPACK_IMPORTED_MODULE_3__type_variable_js__["a" /* default */](name, id);
        variableMap.set(name, sharedVariable);
      }
      return Type.newVariable(sharedVariable);
    }

    if (this.isSetView) {
      return this.primitiveType().assignVariableIds(variableMap).setViewOf();
    }

    if (this.isInterface) {
      var shape = this.interfaceShape.clone();
      shape._typeVars.map(({object, field}) => object[field] = object[field].assignVariableIds(variableMap));
      return Type.newInterface(shape);
    }

    return this;
  }

  // Replaces manifestReference types with resolved schemas.
  resolveReferences(resolve) {
    if (this.isManifestReference) {
      let resolved = resolve(this.data);
      if (resolved.schema) {
        return Type.newEntity(resolved.schema);
      } else if (resolved.shape) {
        return Type.newInterface(resolved.shape);
      } else {
        throw new Error('Expected {shape} or {schema}')
      }
    }

    if (this.isSetView) {
      return this.primitiveType().resolveReferences(resolve).setViewOf();
    }

    return this;
  }

  equals(type) {
    if (this.tag !== type.tag)
      return false;
    if (this.tag == 'Entity') {
      return this.data.equals(type.data);
    }
    if (this.isSetView) {
      return this.data.equals(type.data);
    }

    if (this.isInterface)
      return this.data.equals(type.data);
    // TODO: this doesn't always work with the way the parser keeps kind
    // information around
    return JSON.stringify(this.data) == JSON.stringify(type.data);
  }

  get isValid() {
    return !this.variableReference;
  }

  primitiveType() {
    var type = this.setViewType;
    return new Type(type.tag, type.data);
  }

  resolvedType() {
    if (this.isTypeVariable && this.data.isResolved)
      return this.data.resolution.resolvedType();

    return this;
  }

  toLiteral() {
    if (this.data.toLiteral)
      return {tag: this.tag, data: this.data.toLiteral()};
    return this;
  }

  static _deliteralizer(tag) {
    switch (tag) {
      case 'Interface':
        return __WEBPACK_IMPORTED_MODULE_1__shape_js__["a" /* default */].fromLiteral;
      case 'Entity':
        return __WEBPACK_IMPORTED_MODULE_2__schema_js__["a" /* default */].fromLiteral;
      case 'SetView':
        return Type.fromLiteral;
      default:
        return a => a;
    }
  }

  static fromLiteral(literal) {
    return new Type(literal.tag, Type._deliteralizer(literal.tag)(literal.data));
  }

  setViewOf() {
    return Type.newSetView(this);
  }

  hasProperty(property) {
    if (property(this))
      return true;
    if (this.isSetView)
      return this.setViewType.hasProperty(property);
    return false;
  }

  toString() {
    if (this.isSetView)
      return `[${this.primitiveType().toString()}]`;
    if (this.isEntity)
      return this.entitySchema.name;
    if (this.isInterface)
      return 'Interface'
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])('Add support to serializing type:', this);
  }

  toPrettyString() {
    if (this.isRelation)
      return JSON.stringify(this.data);
    if (this.isSetView) {
      return `${this.primitiveType().toPrettyString()} List`;
    }
    if (this.isVariable)
      return `[${this.variableName}]`;
    if (this.isVariableReference)
      return `[${this.variableReferenceName}]`;
    if (this.isEntity) {
      // Spit MyTypeFOO to My Type FOO
      if (this.entitySchema.name) {
        return this.entitySchema.name.replace(/([^A-Z])([A-Z])/g, "$1 $2").replace(/([A-Z][^A-Z])/g, " $1").trim();
      } 
      return JSON.stringify(this.entitySchema._model);
    }
    if (this.isManifestReference)
      return this.manifestReferenceName;
    if (this.isInterface)
      return this.interfaceShape.toPrettyString();
  }
}

addType('ManifestReference');
addType('Entity', 'schema');
addType('VariableReference');
addType('Variable');
addType('SetView', 'type');
addType('Relation', 'entities');
addType('Interface', 'shape');

/* harmony default export */ __webpack_exports__["a"] = (Type);






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbols_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_js__ = __webpack_require__(1);
// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt






class Entity {
  constructor(userIDComponent) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(!userIDComponent || userIDComponent.indexOf(':') == -1, "user IDs must not contain the ':' character")
    this[__WEBPACK_IMPORTED_MODULE_1__symbols_js__["a" /* default */].identifier] = undefined;
    this._userIDComponent = userIDComponent;
  }
  get data() {
    return undefined;
  }

  getUserID() {
    return this._userIDComponent;
  }

  isIdentified() {
    return this[__WEBPACK_IMPORTED_MODULE_1__symbols_js__["a" /* default */].identifier] !== undefined;
  }
  // TODO: entity should not be exposing its IDs.
  get id() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(!!this.isIdentified());
    return this[__WEBPACK_IMPORTED_MODULE_1__symbols_js__["a" /* default */].identifier];
  }
  identify(identifier) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(!this.isIdentified());
    this[__WEBPACK_IMPORTED_MODULE_1__symbols_js__["a" /* default */].identifier] = identifier;
    let components = identifier.split(':');
    if (components[components.length - 2] == 'uid')
      this._userIDComponent = components[components.length - 1];
  }
  createIdentity(components) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(!this.isIdentified());
    if (this._userIDComponent)
      var id = `${components.base}:uid:${this._userIDComponent}`;
    else
      var id = `${components.base}:${components.component()}`;
    this[__WEBPACK_IMPORTED_MODULE_1__symbols_js__["a" /* default */].identifier] = id;
  }
  toLiteral() {
    return this.rawData;
  }

  get debugString() {
    return JSON.stringify(this.rawData);
  }

  static get type() {
    // TODO: should the entity's key just be its type?
    // Should it just be called type in that case?
    return __WEBPACK_IMPORTED_MODULE_2__type_js__["a" /* default */].newEntity(this.key.schema);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Entity);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shape_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_assert_web_js__ = __webpack_require__(0);
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */





class ConnectionSpec {
  constructor(rawData, typeVarMap) {
    this.rawData = rawData;
    this.direction = rawData.direction;
    this.name = rawData.name;
    this.type = rawData.type.assignVariableIds(typeVarMap);
    this.isOptional = rawData.isOptional;
  }

  get isInput() {
    // TODO: we probably don't really want host to be here.
    return this.direction == "in" || this.direction == "inout" || this.direction == "host";
  }

  get isOutput() {
    return this.direction == "out" || this.direction == "inout";
  }
}

class SlotSpec {
  constructor(slotModel) {
    this.name = slotModel.name;
    this.isRequired = slotModel.isRequired;
    this.isSet = slotModel.isSet;
    this.formFactor = slotModel.formFactor;
    this.providedSlots = [];
    slotModel.providedSlots.forEach(ps => {
      this.providedSlots.push(new ProvidedSlotSpec(ps.name, ps.isSet, ps.formFactor, ps.views));
    });
  }
}

class ProvidedSlotSpec {
  constructor(name, isSet, formFactor, views) {
    this.name = name;
    this.isSet = isSet;
    this.formFactor = formFactor;
    this.views = views;
  }
}

class ParticleSpec {
  constructor(model, resolveSchema) {
    this._model = model;
    this.name = model.name;
    this.verbs = model.verbs;
    var typeVarMap = new Map();
    this.connections = model.args.map(a => new ConnectionSpec(a, typeVarMap));
    this.connectionMap = new Map();
    this.connections.forEach(a => this.connectionMap.set(a.name, a));
    this.inputs = this.connections.filter(a => a.isInput);
    this.outputs = this.connections.filter(a => a.isOutput);
    this.transient = model.transient;

    // initialize descriptions patterns.
    model.description = model.description || {};
    this.validateDescription(model.description);
    this.pattern = model.description["pattern"];
    this.connections.forEach(connectionSpec => {
      connectionSpec.pattern = model.description[connectionSpec.name];
    });

    this.implFile = model.implFile;
    this.affordance = model.affordance;
    this.slots = new Map();
    if (model.slots)
      model.slots.forEach(s => this.slots.set(s.name, new SlotSpec(s)));
    // Verify provided slots use valid view connection names.
    this.slots.forEach(slot => {
      slot.providedSlots.forEach(ps => {
        ps.views.forEach(v => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__platform_assert_web_js__["a" /* default */])(this.connectionMap.has(v), "Cannot provide slot for nonexistent view constraint ", v));
      });
    });
  }

  isInput(param) {
    for (let input of this.inputs) if (input.name == param) return true;
  }

  isOutput(param) {
    for (let outputs of this.outputs) if (outputs.name == param) return true;
  }

  getSlotSpec(slotName) {
    return this.slots.get(slotName);
  }

  get primaryVerb() {
    if (this.verbs.length > 0) {
      return this.verbs[0];
    }
  }

  matchAffordance(affordance) {
    return this.slots.size <= 0 || this.affordance.includes(affordance);
  }

  toLiteral() {
    let {args, name, verbs, transient, description, implFile, affordance, slots} = this._model;
    args = args.map(a => {
      let {type, direction, name} = a;
      type = type.toLiteral();
      return {type, direction, name};
    });
    return {args, name, verbs, transient, description, implFile, affordance, slots};
  }

  static fromLiteral(literal) {
    let {args, name, verbs, transient, description, implFile, affordance, slots} = literal;
    args = args.map(({type, direction, name}) => ({type: __WEBPACK_IMPORTED_MODULE_0__type_js__["a" /* default */].fromLiteral(type), direction, name}));
    return new ParticleSpec({args, name, verbs, transient, description, implFile, affordance, slots});
  }

  validateDescription(description) {
    Object.keys(description || []).forEach(d => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__platform_assert_web_js__["a" /* default */])(['kind', 'location', 'pattern'].includes(d) || this.connectionMap.has(d), `Unexpected description for ${d}`);
    });
  }

  toInterface() {
    return __WEBPACK_IMPORTED_MODULE_0__type_js__["a" /* default */].newInterface(this._toShape());
  }

  _toShape() {
    const views = this._model.args;
    // TODO: wat do?
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__platform_assert_web_js__["a" /* default */])(!this.slots.length, 'please implement slots toShape');
    const slots = [];
    return new __WEBPACK_IMPORTED_MODULE_1__shape_js__["a" /* default */](views, slots);
  }

  toString() {
    let results = [];
    results.push(`particle ${this.name} in '${this.implFile}'`);
    let connRes = this.connections.map(cs => `${cs.direction} ${cs.type.toString()}${cs.isOptional ? '?' : ''} ${cs.name}`);
    results.push(`  ${this.primaryVerb}(${connRes.join(', ')})`);
    this.affordance.filter(a => a != 'mock').forEach(a => results.push(`  affordance ${a}`));
    // TODO: support form factors
    this.slots.forEach(s => {
    results.push(`  ${s.isRequired ? 'must ' : ''}consume ${s.isSet ? 'set of ' : ''}${s.name}`);
      s.providedSlots.forEach(ps => {
        results.push(`    provide ${ps.isSet ? 'set of ' : ''}${ps.name}`)
        // TODO: support form factors
        ps.views.forEach(psv => results.push(`      view ${psv}`))
      });
    });
    // Description
    if (!!this.pattern) {
      results.push(`  description \`${this.pattern}\``);
      this.connections.forEach(cs => {
        if (!!cs.pattern) {
          results.push(`    ${cs.name} \`${cs.pattern}\``);
        }
      });
    }
    return results.join('\n');
  }

  toManifestString() {
    return this.toString();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ParticleSpec);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_js__ = __webpack_require__(2);
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



class Schema {
  constructor(model) {
    this._model = model;
    this.name = model.name;
    this.parents = (model.parents || []).map(parent => new Schema(parent));
    this._normative = {};
    this._optional = {};

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(model.sections, `${JSON.stringify(model)} should have sections`);
    for (var section of model.sections) {
      var into = section.sectionType == 'normative' ? this._normative : this._optional;
      for (var field in section.fields) {
        // TODO normalize field types here?
        into[field] = section.fields[field];
      }
    }
  }

  toLiteral() {
    return this._model;
  }

  static fromLiteral(data) {
    return new Schema(data);
  }

  equals(otherSchema) {
    return this === otherSchema || (this.name == otherSchema.name
       // TODO: Check equality without calling contains.
       && this.contains(otherSchema)
       && otherSchema.contains(this));
  }

  contains(otherSchema) {
    if (!this.containsAncestry(otherSchema)) {
      return false;
    }
    for (let section of ['normative', 'optional']) {
      let thisSection = this[section];
      let otherSection = otherSchema[section];
      for (let field in otherSection) {
        if (thisSection[field] != otherSection[field]) {
          return false;
        }
      }
    }
    return true;
  }
  containsAncestry(otherSchema) {
    if (this.name == otherSchema.name) {
      nextOtherParent: for (let otherParent of otherSchema.parents) {
        for (let parent of this.parents) {
          if (parent.containsAncestry(otherParent)) {
            continue nextOtherParent;
          }
        }
        return false;
      }
      return true;
    } else {
      for (let parent of this.parents) {
        if (parent.containsAncestry(otherSchema)) {
          return true;
        }
      }
      return false;
    }
  }

  get type() {
    return __WEBPACK_IMPORTED_MODULE_1__type_js__["a" /* default */].newEntity(this);
  }

  get normative() {
    var normative = {};
    for (var parent of this.parents)
      Object.assign(normative, parent.normative);
    Object.assign(normative, this._normative);
    return normative;
  }

  get optional() {
    var optional = {};
    for (var parent of this.parents)
      Object.assign(optional, parent.optional);
    Object.assign(optional, this._optional);
    return optional;
  }

  entityClass() {
    let schema = this;
    let className = this.name;
    let normative = this.normative;
    let optional = this.optional;
    let classJunk = ['toJSON', 'prototype', 'toString', 'inspect'];

    let checkFieldIsValidAndGetTypes = (name, op) => {
      let fieldType = normative[name] || optional[name];
      switch (fieldType) {
        case undefined:
          throw new Error(`Can't ${op} field ${name} not in schema ${className}`);
        case 'Number':
          return [fieldType, 'number'];
        case 'Boolean':
          return [fieldType, 'boolean']
        case 'Object':
          return [fieldType, 'object']
        default:
          // Text, URL
          return [fieldType, 'string'];
      }
    };

    let clazz = class extends __WEBPACK_IMPORTED_MODULE_2__entity_js__["a" /* default */] {
      constructor(data, userIDComponent) {
        super(userIDComponent);
        this.rawData = new Proxy({}, {
          get: (target, name) => {
            if (classJunk.includes(name))
              return undefined;
            if (name.constructor == Symbol)
              return undefined;
            let [fieldType, jsType] = checkFieldIsValidAndGetTypes(name, 'get');
            let value = target[name];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(value === undefined || value === null || typeof(value) == jsType,
                   `Field ${name} (type ${fieldType}) has value ${value} (type ${typeof(value)})`);
            return value;
          },
          set: (target, name, value) => {
            let [fieldType, jsType] = checkFieldIsValidAndGetTypes(name, 'set');
            if (value !== undefined && value !== null && typeof(value) != jsType) {
              throw new TypeError(
                  `Can't set field ${name} (type ${fieldType}) to value ${value} (type ${typeof(value)})`);
            }
            target[name] = value;
            return true;
          }
        });
        for (let [name, value] of Object.entries(data)) {
          this.rawData[name] = value;
        }
      }

      dataClone() {
        let clone = {};
        for (let propertyList of [normative, optional]) {
          Object.keys(propertyList).forEach(prop => clone[prop] = this.rawData[prop]);
        }
        return clone;
      }

      static get key() {
        return {
          tag: 'entity',
          schema: schema.toLiteral(),
        };
      }
    }

    Object.defineProperty(clazz, 'type', {value: this.type});
    Object.defineProperty(clazz, 'name', {value: this.name});
    // TODO: make a distinction between normative and optional properties.
    // TODO: add query / getter functions for user properties
    for (let propertyList of [normative, optional]) {
      for (let property in propertyList) {
        Object.defineProperty(clazz.prototype, property, {
          get: function() {
            return this.rawData[property];
          },
          set: function(v) {
            this.rawData[property] = v;
          }
        });
      }
    }
    return clazz;
  }

  toString() {
    let results = [];
    results.push(`schema ${this.name}`.concat(this.parent ? ` extends ${this.parent.name}` : ''));

    let propertiesToString = (properties, keyword) => {
      if (Object.keys(properties).length > 0) {
        results.push(`  ${keyword}`);
        Object.keys(properties).forEach(name => {
          let schemaType = Array.isArray(properties[name]) && properties[name].length > 1 ? `(${properties[name].join(' or ')})` : properties[name];
          results.push(`    ${schemaType} ${name}`);
        });
      }
    }

    propertiesToString(this.normative, 'normative');
    propertiesToString(this.optional, 'optional');
    return results.join('\n');
  }

  toManifestString() {
    return this.toString();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Schema);





/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt


/* harmony default export */ __webpack_exports__["a"] = ({identifier: Symbol('id')});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particle_spec_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracelib_trace_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schema_js__ = __webpack_require__(4);
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */








const DEBUGGING = false;

/** @class Particle
 * A basic particle. For particles that provide UI, you may like to
 * instead use DOMParticle.
 */
class Particle {
  constructor(capabilities) {
    this.spec = this.constructor.spec;
    if (this.spec.inputs.length == 0)
      this.extraData = true;
    this.relevances = [];
    this._idle = Promise.resolve();
    this._idleResolver = null;
    this._busy = 0;
    this.slotHandlers = [];
    this.stateHandlers = new Map();
    this.states = new Map();
    this._slotByName = new Map();
    this.capabilities = capabilities || {};
    this.hostedSlotBySlotId = new Map();
  }

  /** @method setViews(views)
   * This method is invoked with a handle for each view this particle
   * is registered to interact with, once those views are ready for
   * interaction. Override the method to register for events from
   * the views.
   *
   * Views is a map from view names to view handles.
   */
  setViews(views) {

  }

  constructInnerArc() {
    if (!this.capabilities.constructInnerArc)
      throw new Error("This particle is not allowed to construct inner arcs");
    return this.capabilities.constructInnerArc(this);
  }

  get busy() {
    return this._busy > 0;
  }

  get idle() {
    return this._idle;
  }

  /** @method setBusy()
   * Prevents this particle from indicating that it's idle until a matching
   * call to setIdle is made.
   */
  setBusy() {
    if (this._busy == 0)
    this._idle = new Promise((resolve, reject) => {
      this._idleResolver = resolve;
    });
    this._busy++;
  }

  /** @method setIdle()
   * Indicates that a busy period (initiated by a call to setBusy) has completed.
   */
  setIdle() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__platform_assert_web_js__["a" /* default */])(this._busy > 0);
    this._busy--;
    if (this._busy == 0)
      this._idleResolver();
  }

  set relevance(r) {
    this.relevances.push(r);
  }

  inputs() {
    return this.spec.inputs;
  }

  outputs() {
    return this.spec.outputs;
  }

  /** @method getSlot(name)
   * Returns the slot with provided name.
   */
  getSlot(name) {
    return this._slotByName.get(name);
  }

  addSlotHandler(f) {
    this.slotHandlers.push(f);
  }

  addStateHandler(states, f) {
    states.forEach(state => {
      if (!this.stateHandlers.has(state)) {
        this.stateHandlers.set(state, []);
      }
      this.stateHandlers.get(state).push(f);
    });
  }

  emit(state, value) {
    this.states.set(state, value);
    this.stateHandlers.get(state).forEach(f => f(value));
  }

  /** @method on(views, names, kind, f)
   * Convenience method for registering a callback on multiple views at once.
   *
   * views is a map from names to view handles
   * names indicates the views which should have a callback installed on them
   * kind is the kind of event that should be registered for
   * f is the callback function
   */
  on(views, names, kind, f) {
    if (typeof names == "string")
      names = [names];
    var trace = __WEBPACK_IMPORTED_MODULE_2__tracelib_trace_js__["a" /* default */].start({cat: 'particle', names: this.constructor.name + "::on", args: {view: names, event: kind}});
    names.forEach(name => views.get(name).on(kind, __WEBPACK_IMPORTED_MODULE_2__tracelib_trace_js__["a" /* default */].wrap({cat: 'particle', name: this.constructor.name, args: {view: name, event: kind}}, f), this));
    trace.end();
  }

  logDebug(tag, view) {
    if (!DEBUGGING)
      return;
    let direction = this.spec.connectionMap.get(tag).direction;
    view.debugString().then(v => console.log(
       `(${this.spec.name})(${direction})(${tag}): (${view.name})`, v));
  }

  when(changes, f) {
    changes.forEach(change => change.register(this, f));
  }

  fireEvent(slotName, event) {
    // TODO(sjmiles): tests can get here without a `this.slot`, maybe this needs to be fixed in MockSlotManager?
    let slot = this.getSlot(slotName);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__platform_assert_web_js__["a" /* default */])(slot, `Particle::fireEvent: slot ${slotName} is falsey`);
    slot.fireEvent(event);
  }

  static buildManifest(strings, ...bits) {
    let output = [];
    for (let i = 0; i < bits.length; i++) {
        let str = strings[i];
        let indent = / *$/.exec(str)[0];
        if (typeof bits[i] == 'string')
          var bitStr = bits[i];
        else
          var bitStr = bits[i].toManifestString();
        bitStr = bitStr.replace(/(\n)/g, '$1' + indent);
        output.push(str);
        output.push(bitStr);
    }
    if (strings.length > bits.length)
      output.push(strings[strings.length - 1]);
    return output.join('');
  }

  setParticleDescription(pattern) {
    return this.setDescriptionPattern('_pattern_', pattern);
  }
  setDescriptionPattern(connectionName, pattern) {
    let descriptions = this._views.get('descriptions');
    if (descriptions) {
      descriptions.store(new descriptions.entityClass({key: connectionName, value: pattern}, connectionName));
      return true;
    }
    return false;
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Particle;


class ViewChanges {
  constructor(views, names, type) {
    if (typeof names == "string")
      names = [names];
    this.names = names;
    this.views = views;
    this.type = type;
  }
  register(particle, f) {
    var modelCount = 0;
    var afterAllModels = () => { if (++modelCount == this.names.length) { f(); } };

    for (var name of this.names) {
      var view = this.views.get(name);
      view.synchronize(this.type, afterAllModels, f, particle)
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = ViewChanges;


class SlotChanges {
  constructor() {
  }
  register(particle, f) {
    particle.addSlotHandler(f);
  }
}
/* unused harmony export SlotChanges */


class StateChanges {
  constructor(states) {
    if (typeof states == "string")
      states = [states];
    this.states = states;
  }
  register(particle, f) {
    particle.addStateHandler(this.states, f);
  }
}
/* unused harmony export StateChanges */


/* harmony default export */ __webpack_exports__["a"] = ({Particle, ViewChanges, SlotChanges, StateChanges});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

/* harmony default export */ __webpack_exports__["a"] = ({});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particle_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser_lib_xen_state_js__ = __webpack_require__(19);
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */







//let log = !global.document || (global.logging === false) ? () => {} : console.log.bind(console, `---------- DomParticle::`);
//console.log(!!global.document, global.logging, log);

let log = false ? console.log.bind(console) : () => {};

/** @class DomParticle
 * Particle that does stuff with DOM.
 */
class DomParticle extends __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__browser_lib_xen_state_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__particle_js__["b" /* Particle */]) {
  /** @method get template()
   * Override to return a String defining primary markup.
   */
  get template() {
    return '';
  }
  /** @method getTemplate(slotName)
   * Override to return a String defining primary markup for the given slot name.
   */
  getTemplate(slotName) {
    // TODO: only supports a single template for now. add multiple templates support.
    return this.template;
  }
  /** @method _shouldRender(props, state)
   * Override to return false if the Particle won't use
   * it's slot.
   */
  _shouldRender(props, state) {
    return true;
  }
  /** @method _render(props, state)
   * Override to return a dictionary to map into the template.
   */
  _render(props, state) {
    return {};
  }
  /** @method _willReceiveProps(props)
   * Override if necessary, to do things when props change.
   */
  _willReceiveProps(props) {
  }
  /** @method get config()
   * Override if necessary, to modify superclass config.
   */
  get config() {
    // TODO(sjmiles): getter that does work is a bad idea, this is temporary
    return {
      views: this.spec.inputs.map(i => i.name),
      // TODO(mmandlis): this.spec needs to be replace with a particle-spec loaded from
      // .manifest files, instead of .ptcl ones.
      slotNames: [...this.spec.slots.values()].map(s => s.name)
    };
  }
  _info() {
    return `---------- DomParticle::[${this.spec.name}]`;
  }
  async setViews(views) {
    this._views = views;
    let config = this.config;
    //let readableViews = config.views.filter(name => views.get(name).canRead);
    //this.when([new ViewChanges(views, readableViews, 'change')], async () => {
    this.when([new __WEBPACK_IMPORTED_MODULE_1__particle_js__["c" /* ViewChanges */](views, config.views, 'change')], async () => {
      // acquire (async) list data from views
      let data = await Promise.all(
        config.views
        .map(name => views.get(name))
        .map(view => view.toList ? view.toList() : view.get())
      );
      // convert view data (array) into props (dictionary)
      let props = Object.create(null);
      config.views.forEach((name, i) => {
        props[name] = data[i];
      });
      this._setProps(props);
    });
    // make sure we invalidate once, even if there are no incoming views
    this._setState({});
  }
  _update(props, state) {
    if (this._shouldRender(this._props, this._state)) {  // TODO: should _shouldRender be slot specific?
      this.relevance = 1;  // TODO: improve relevance signal.
    }
    this.config.slotNames.forEach(s => this.render(s, ["model"]));
  }

  render(slotName, contentTypes) {
    let slot = this.getSlot(slotName);
    if (!slot) {
      return;  // didn't receive StartRender.
    }
    contentTypes.forEach(ct => slot._requestedContentTypes.add(ct));
    if (this._shouldRender(this._props, this._state)) {
      let content = {};
      if (slot._requestedContentTypes.has("template")) {
        content["template"] = this._initializeRender(slot);
      }
      if (slot._requestedContentTypes.has("model")) {
        content["model"] = this._render(this._props, this._state);
      }
      slot.render(content);
    } else if (slot.isRendered) {
      // Send empty object, to clear rendered slot contents.
      slot.render({});
    }
  }

  // TODO: renderHostedSlot and combineHostedContent are methods needed for transformation particle
  // that renders UI. Consider adding a TransformationParticle base class.
  renderHostedSlot(slotName, hostedSlotId, content) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(this.hostedSlotBySlotId.has(hostedSlotId), `Missing model for slot ID ${hostedSlotId}`);
    this.hostedSlotBySlotId.get(hostedSlotId).content = content;

    let slot = this.getSlot(slotName);
    if (slot) {
      let combinedContent = this.combineHostedContent(Object.keys(content));

      // TODO: group multiple calls together!
      if (combinedContent) {
        slot.render(combinedContent);
      } else if (slot.isRendered) {
        slot.render({});
      }
    }
  }
  // Groups all rendered contents produced by the hosted particles, and sets the subId in each model.
  combineHostedContent(contentTypes) {
    let result = {};
    let includeModel = contentTypes.indexOf('model') >= 0;
    let includeTemplate = contentTypes.indexOf('template') >= 0;
    if (includeModel) {
      result.model = {items: []};
    }
    for (let value of this.hostedSlotBySlotId.values()) {
      let content = value.content;
      if (!content) {
        continue;
      }
      if (includeModel) {
        result.model.items.push(Object.assign(content.model || {}, {subId: value.subId}));
      }
      if (includeTemplate && !result.template) {
        // TODO: Currently using the first available template. Add support for multiple templates.
        result.template = content.template;
      }
    }
    return result;
  }
  _initializeRender(slot) {
    let template = this.getTemplate(slot.slotName);
    this._findHandlerNames(template).forEach(name => {
      slot.clearEventHandlers(name);
      slot.registerEventHandler(name, eventlet => {
        if (this[name]) {
          this[name](eventlet, this._state, this._views);
        }
      });
    });
    return template;
  }
  _findHandlerNames(html) {
    let handlers = new Map();
    let re = /on-.*?=\"([^\"]*)"/gmi;
    for (let m=re.exec(html); m; m=re.exec(html)) {
      handlers.set(m[1], true);
    }
    return Array.from(handlers.keys());
  }
  setParticleDescription(pattern) {
    if (typeof pattern === "string") {
      return super.setParticleDescription(pattern);
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(!!pattern.template && !!pattern.model, 'Description pattern must either be string or have template and model');
    super.setDescriptionPattern("_template_", pattern.template);
    super.setDescriptionPattern("_model_", JSON.stringify(pattern.model));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (DomParticle);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbols_js__ = __webpack_require__(5);
// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt







// TODO: Should relations normalized by another layer, or here?
class Relation extends __WEBPACK_IMPORTED_MODULE_1__entity_js__["a" /* default */] {
  constructor(...entities) {
    super();
    this.entities = entities;
  }
  get data() {
    return this.entities.map(entity => entity[__WEBPACK_IMPORTED_MODULE_3__symbols_js__["a" /* default */].identifier].toLiteral());
  }
  static typeFor(relation) {
    var result = new __WEBPACK_IMPORTED_MODULE_2__type_js__["a" /* default */](relation.entities.map(entity => entity.constructor.type), relation.constructor);
    return result;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Relation);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_js__ = __webpack_require__(1);
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



// ShapeView {name, direction, type}
// Slot {name, direction}

function _fromLiteral(member) {
  if (typeof member == 'object')
    return __WEBPACK_IMPORTED_MODULE_1__type_js__["a" /* default */].fromLiteral(member);
  return member;
}

function _toLiteral(member) {
  if (member && member.toLiteral)
    return member.toLiteral();
  return member;
}

class Shape {
  constructor(views, slots) {
    this.views = views;
    this.slots = slots;
    this._typeVars = [];
    for (let view of views)
      for (let field of ['type', 'name', 'direction'])
        if (Shape.isTypeVar(view[field]))
          this._typeVars.push({object: view, field});

    for (let slot of slots)
      for (let field of ['name', 'direction'])
        if (Shape.isTypeVar(slot[field]))
          this._typeVars.push({object: slot, field});
  }

  toPrettyString() {
    return "SHAAAAPE";
  }

  static fromLiteral(data) {
    let views = data.views.map(view => ({type: _fromLiteral(view.type), name: _fromLiteral(view.name), direction: _fromLiteral(view.direction)}));
    let slots = data.slots.map(slot => ({name: _fromLiteral(slot.name), direction: _fromLiteral(slot.direction)}));
    return new Shape(views, slots);
  }

  toLiteral() {
    let views = this.views.map(view => ({type: _toLiteral(view.type), name: _toLiteral(view.name), direction: _toLiteral(view.direction)}));
    let slots = this.slots.map(slot => ({name: _toLiteral(slot.name), direction: _toLiteral(slot.direction)}));
    return {views, slots};
  }

  clone() {
    var views = this.views.map(({name, direction, type}) => ({name, direction, type}));
    var slots = this.slots.map(({name, direction}) => ({name, direction}));
    return new Shape(views, slots);
  }

  equals(other) {
    if (this.views.length !== other.views.length)
      return false;

    // TODO: this isn't quite right as it doesn't deal with duplicates properly
    for (let otherView of other.views) {
      let exists = false;
      for (let view of this.views) {
        if (view.name == otherView.name && view.direction == otherView.direction && view.type.equals(otherView.type)) {
          exists = true;
          break;
        }
      }
      if (!exists)
        return false;
    }

    // TODO: compare slots too
    return true;
  }

  static isTypeVar(reference) {
    return (reference instanceof __WEBPACK_IMPORTED_MODULE_1__type_js__["a" /* default */]) && reference.hasProperty(r => r.isVariable || r.isVariableReference);
  }

  static mustMatch(reference) {
    return !(reference == undefined || Shape.isTypeVar(reference));
  }

  static viewsMatch(shapeView, particleView) {
    if (Shape.mustMatch(shapeView.name) && shapeView.name !== particleView.name)
      return false;
    // TODO: direction subsetting?
    if (Shape.mustMatch(shapeView.direction) && shapeView.direction !== particleView.direction)
      return false;
    // TODO: polymorphism?
    if (Shape.mustMatch(shapeView.type) && !shapeView.type.equals(particleView.type))
      return false;
    return true;
  }

  _particleMatches(particleSpec) {
    var viewMatches = this.views.map(view => particleSpec.connections.filter(connection => Shape.viewsMatch(view, connection)));

    var exclusions = [];

    function choose(list, exclusions) {
      if (list.length == 0)
        return true;
      var thisLevel = list.pop();
      for (var connection of thisLevel) {
        if (exclusions.includes(connection))
          continue;
        var newExclusions = exclusions.slice();
        newExclusions.push(connection);
        if (choose(list, newExclusions))
          return true;
      }

      return false;
    }

    return choose(viewMatches, []);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Shape);




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arcs_runtime_loader_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arcs_runtime_particle_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arcs_runtime_dom_particle_js__ = __webpack_require__(8);
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */





class BrowserLoader extends __WEBPACK_IMPORTED_MODULE_0__arcs_runtime_loader_js__["a" /* default */] {
  constructor(urlMap) {
    super();
    this._urlMap = urlMap;
    // TODO: Update all callers to pass a valid base URL to avoid the use of
    //       location here. `new URL(base)` should be valid.
    //this._base = new URL(base || '', global.location).href;
  }
  _resolve(path) {
    //return new URL(path, this._base).href;
    let url = this._urlMap[path];
    if (!url && path) {
      // TODO(sjmiles): inefficient!
      let macro = Object.keys(this._urlMap).sort((a,b) => b.length - a.length).find(k => path.slice(0, k.length) == k);
      if (macro) {
        url = this._urlMap[macro] + path.slice(macro.length);
      }
    }
    url = url || path;
    //console.log(`browser-cdn-loader: resolve(${path}) = ${url}`);
    return url;
  }
  loadResource(name) {
    return this._loadURL(this._resolve(name));
  }
  requireParticle(fileName) {
    let path = this._resolve(fileName);
    // inject path to this particle into the UrlMap,
    // allows "foo.js" particle to invoke `importScripts(resolver('foo/othermodule.js'))`
    let parts = path.split('/');
    let suffix = parts.pop();
    let folder = parts.join('/');
    let name = suffix.split('.').shift();
    this._urlMap[name] = folder;
    let result = [];
    self.defineParticle = function(particleWrapper) {
      result.push(particleWrapper);
    };
    importScripts(path);
    delete self.defineParticle;
    return this.unwrapParticle(result[0]);
  }
  unwrapParticle(particleWrapper) {
    // TODO(sjmiles): regarding `resolver`:
    //  _resolve method allows particles to request remapping of assets paths
    //  for use in DOM
    let resolver = this._resolve.bind(this);
    return particleWrapper({particle: __WEBPACK_IMPORTED_MODULE_1__arcs_runtime_particle_js__["a" /* default */], Particle: __WEBPACK_IMPORTED_MODULE_1__arcs_runtime_particle_js__["a" /* default */].Particle, DomParticle: __WEBPACK_IMPORTED_MODULE_2__arcs_runtime_dom_particle_js__["a" /* default */], resolver});
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BrowserLoader;
;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__type_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handle_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_channel_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__particle_spec_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schema_js__ = __webpack_require__(4);
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */




// import {define} from './particle.js';





class StorageProxy {
  constructor(id, type, port, pec, name, version) {
    this._id = id;
    this._type = type;
    this._port = port;
    this._pec = pec;
    this.name = name;
    this._version = version;
    this.state = 'outOfDate';
  }

  get id() {
    return this._id;
  }

  get type() {
    return this._type;
  }

  generateIDComponents() {
    return this._pec.generateIDComponents();
  }

  on(type, callback, target) {
    var dataFreeCallback = (d) => callback();
    this.synchronize(type, dataFreeCallback, dataFreeCallback, target);
  }

  synchronize(type, modelCallback, callback, target) {
    this._port.Synchronize({handle: this, modelCallback, callback, target, type});
  }

  get() {
    return new Promise((resolve, reject) =>
      this._port.HandleGet({ callback: r => {resolve(r)}, handle: this }));
  }

  toList() {
    return new Promise((resolve, reject) =>
      this._port.HandleToList({ callback: r => resolve(r), handle: this }));
  }

  set(entity) {
    this._port.HandleSet({data: entity, handle: this});
  }

  store(entity) {
    this._port.HandleStore({data: entity, handle: this});
  }

  remove(entityId) {
    this._port.HandleRemove({data: entityId, handle: this});
  }

  clear() {
    this._port.HandleClear({handle: this});
  }
}

class InnerPEC {
  constructor(port, idBase, loader) {
    this._apiPort = new __WEBPACK_IMPORTED_MODULE_3__api_channel_js__["a" /* PECInnerPort */](port);
    this._particles = [];
    this._idBase = idBase;
    this._nextLocalID = 0;
    this._loader = loader;
    this._pendingLoads = [];

    /*
     * This code ensures that the relevant types are known
     * in the scope object, because otherwise we can't do
     * particleSpec resolution, which is currently a necessary
     * part of particle construction.
     *
     * Possibly we should eventually consider having particle
     * specifications separated from particle classes - and
     * only keeping type information on the arc side.
     */
    this._apiPort.onDefineHandle = ({type, identifier, name, version}) => {
      return new StorageProxy(identifier, type, this._apiPort, this, name, version);
    };

    this._apiPort.onCreateHandleCallback = ({type, id, name, callback}) => {
      var proxy = new StorageProxy(id, type, this._apiPort, this, name, 0);
      Promise.resolve().then(() => callback(proxy));
      return proxy;
    }

    this._apiPort.onCreateSlotCallback = ({hostedSlotId, callback}) => {
      Promise.resolve().then(() => callback(hostedSlotId));
      return hostedSlotId;
    }

    this._apiPort.onInnerArcRender = ({transformationParticle, transformationSlotName, hostedSlotId, content}) => {
      transformationParticle.renderHostedSlot(transformationSlotName, hostedSlotId, content);
    }

    this._apiPort.onDefineParticle = ({particleDefinition, particleFunction}) => {
      var particle = define(particleDefinition, eval(particleFunction));
      this._loader.registerParticle(particle);
    };

    this._apiPort.onStop = () => {
      if (global.close) {
        global.close();
      }
    }

    this._apiPort.onInstantiateParticle =
      ({spec, handles}) => this._instantiateParticle(spec, handles);

    this._apiPort.onSimpleCallback = ({callback, data}) => callback(data);

    this._apiPort.onConstructArcCallback = ({callback, arc}) => callback(arc);

    this._apiPort.onAwaitIdle = ({version}) =>
      this.idle.then(a => this._apiPort.Idle({version, relevance: this.relevance}));

    this._apiPort.onUIEvent = ({particle, slotName, event}) => particle.fireEvent(slotName, event);

    this._apiPort.onStartRender = ({particle, slotName, contentTypes}) => {
      /** @class Slot
       * A representation of a consumed slot. Retrieved from a particle using
       * particle.getSlot(name)
       */
      class Slotlet {
        constructor(pec, particle, slotName) {
          this._slotName = slotName;
          this._particle = particle;
          this._handlers = new Map();
          this._pec = pec;
          this._requestedContentTypes = new Set();
        }
        get particle() { return this._particle; }
        get slotName() { return this._slotName; }
        get isRendered() { return this._isRendered; }
        /** @method render(content)
         * renders content to the slot.
         */
        render(content) {
          this._pec._apiPort.Render({particle, slotName, content});

          Object.keys(content).forEach(key => { this._requestedContentTypes.delete(key) });
          // Slot is considered rendered, if a non-empty content was sent and all requested content types were fullfilled.
          this._isRendered = this._requestedContentTypes.size == 0 && (Object.keys(content).length > 0);
        }
        /** @method registerEventHandler(name, f)
         * registers a callback to be invoked when 'name' event happens.
         */
        registerEventHandler(name, f) {
          if (!this._handlers.has(name)) {
            this._handlers.set(name, []);
          }
          this._handlers.get(name).push(f);
        }
        clearEventHandlers(name) {
          this._handlers.set(name, []);
        }
        fireEvent(event) {
          for (var handler of this._handlers.get(event.handler) || []) {
            handler(event);
          }
        }
      }

      particle._slotByName.set(slotName, new Slotlet(this, particle, slotName));
      particle.render(slotName, contentTypes);
    };

    this._apiPort.onStopRender = ({particle, slotName}) => {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__platform_assert_web_js__["a" /* default */])(particle._slotByName.has(slotName),
        `Stop render called for particle ${particle.name} slot ${slotName} without start render being called.`);
      particle._slotByName.delete(slotName);
    }
  }

  generateIDComponents() {
    return {base: this._idBase, component: () => this._nextLocalID++};
  }

  generateID() {
    return `${this._idBase}:${this._nextLocalID++}`;
  }

  innerArcHandle(arcId) {
    var pec = this;
    return {
      createHandle: function(type, name) {
        return new Promise((resolve, reject) =>
          pec._apiPort.ArcCreateHandle({arc: arcId, type, name, callback: proxy => {
            var v = __WEBPACK_IMPORTED_MODULE_1__handle_js__["a" /* default */].handleFor(proxy, proxy.type.isSetView, true, true);
            v.entityClass = (proxy.type.isSetView ? proxy.type.primitiveType().entitySchema : proxy.type.entitySchema).entityClass();
            resolve(v);
          }}));
      },
      createSlot: function(transformationParticle, transformationSlotName, hostedParticleName, hostedSlotName) {
        return new Promise((resolve, reject) =>
          pec._apiPort.ArcCreateSlot({arc: arcId, transformationParticle, transformationSlotName, hostedParticleName, hostedSlotName, callback: hostedSlotId => {
            resolve(hostedSlotId);
          }}));
      },
      loadRecipe: function(recipe) {
        // TODO: do we want to return a promise on completion?
        return new Promise((resolve, reject) =>
          pec._apiPort.ArcLoadRecipe({arc: arcId, recipe, callback: a => {
            if (a == undefined)
              resolve();
            else
              reject(a);
          }}));
      }
    };
  }

  defaultCapabilitySet() {
    return {
      constructInnerArc: particle => {
        return new Promise((resolve, reject) =>
          this._apiPort.ConstructInnerArc({ callback: arcId => {resolve(this.innerArcHandle(arcId))}, particle }));
      }
    }
  }

  async _instantiateParticle(spec, proxies) {
    let name = spec.name;
    var resolve = null;
    var p = new Promise((res, rej) => resolve = res);
    this._pendingLoads.push(p);
    let clazz = await this._loader.loadParticleClass(spec);
    let capabilities = this.defaultCapabilitySet();
    let particle = new clazz();  // TODO: how can i add an argument to DomParticle ctor?
    particle.capabilities = capabilities;
    this._particles.push(particle);

    var handleMap = new Map();
    proxies.forEach((value, key) => {
      handleMap.set(key, __WEBPACK_IMPORTED_MODULE_1__handle_js__["a" /* default */].handleFor(value, value.type.isSetView, spec.connectionMap.get(key).isInput, spec.connectionMap.get(key).isOutput));
    });

    for (let localHandle of handleMap.values()) {
      var type = localHandle.underlyingView().type;
      let schemaModel;
      if (type.isSetView && type.primitiveType().isEntity) {
        schemaModel = type.primitiveType().entitySchema;
      } else if (type.isEntity) {
        schemaModel = type.entitySchema;
      }

      if (schemaModel)
        localHandle.entityClass = schemaModel.entityClass();
    }

    return [particle, async () => {
      resolve();
      var idx = this._pendingLoads.indexOf(p);
      this._pendingLoads.splice(idx, 1);
      await particle.setViews(handleMap);
    }];
  }

  get relevance() {
    var rMap = new Map();
    this._particles.forEach(p => {
      if (p.relevances.length == 0)
        return;
      rMap.set(p, p.relevances);
      p.relevances = [];
    });
    return rMap;
  }

  get busy() {
    if (this._pendingLoads.length > 0)
      return true;
    for (let particle of this._particles) {
      if (particle.busy) {
        return true;
      }
    }
    return false;
  }

  get idle() {
    if (!this.busy) {
      return Promise.resolve();
    }
    return Promise.all(this._pendingLoads.concat(this._particles.map(particle => particle.idle))).then(() => this.idle);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (InnerPEC);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(15)))

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arcs_runtime_inner_PEC_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_cdn_loader_js__ = __webpack_require__(11);
// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt




const log = console.log.bind(console, `%cworker-entry`, `background: #12005e; color: white; padding: 1px 6px 2px 7px; border-radius: 6px;`);

self.onmessage = function(e) {
  self.onmessage = null;
  let {id, base} = e.data;
  //log('starting worker', id);
  new __WEBPACK_IMPORTED_MODULE_0__arcs_runtime_inner_PEC_js__["a" /* default */](e.ports[0], id, new __WEBPACK_IMPORTED_MODULE_1__browser_cdn_loader_js__["a" /* default */](base));
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

var supportedTypes = ["Text", "URL", "Number", "Boolean"];

class JsonldToManifest {
  static convert(jsonld, theClass) {
    var obj = JSON.parse(jsonld);
    var classes = {};
    var properties = {};

    if (!obj['@graph']) {
      obj['@graph'] = [obj];
    }

    for (var item of obj['@graph']) {
      if (item["@type"] == "rdf:Property")
        properties[item["@id"]] = item;
      else if (item["@type"] == "rdfs:Class") {
        classes[item["@id"]] = item;
        item.subclasses = [];
        item.superclass = null;
      }
    }

    for (var clazz of Object.values(classes)) {
      if (clazz['rdfs:subClassOf'] !== undefined) {
        if (clazz['rdfs:subClassOf'].length == undefined)
          clazz['rdfs:subClassOf'] = [clazz['rdfs:subClassOf']];
        for (let subClass of clazz['rdfs:subClassOf']) {
          var superclass = subClass['@id'];
          if (clazz.superclass == undefined)
            clazz.superclass = [];
          if (classes[superclass]) {
            classes[superclass].subclasses.push(clazz);
            clazz.superclass.push(classes[superclass]);
          } else {
            clazz.superclass.push({'@id': superclass});
          }
        }
      }
    }

    for (var clazz of Object.values(classes)) {
      if (clazz.subclasses.length == 0 && theClass == undefined) {
        theClass = clazz;
      }
    }

    var relevantProperties = [];
    for (var property of Object.values(properties)) {
      var domains = property['schema:domainIncludes'];
      if (!domains)
        domains = {'@id': theClass['@id']};
      if (!domains.length)
        domains = [domains];
      domains = domains.map(a => a['@id']);
      if (domains.includes(theClass['@id'])) {
        var name = property['@id'].split(':')[1];
        var type = property['schema:rangeIncludes'];
        if (!type)
          console.log(property);
        if (!type.length)
          type = [type];

        type = type.map(a => a['@id'].split(':')[1]);
        type = type.filter(type => supportedTypes.includes(type));
        if (type.length > 0)
        relevantProperties.push({name, type});
      }
    }

    var className = theClass['@id'].split(':')[1];
    var superNames = theClass.superclass ? theClass.superclass.map(a => a['@id'].split(':')[1]) : [];

    var s = '';
    for (let superName of superNames)
      s += `import 'https://schema.org/${superName}'\n\n`

    s += `schema ${className}`
    if (superNames.length > 0)
      s += ` extends ${superNames.join(', ')}`

    if (relevantProperties.length > 0) {
      s += '\n  optional';
      for (var property of relevantProperties) {
        if (property.type.length > 1)
          var type = '(' + property.type.join(" or ") + ')';
        else
          var type = property.type[0]
        s += `\n    ${type} ${property.name}`;
      }
    }
    s += '\n';

    return s;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (JsonldToManifest);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

/* harmony default export */ __webpack_exports__["a"] = ({});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PECOuterPort */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PECInnerPort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__particle_spec_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_js__ = __webpack_require__(1);
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */






class ThingMapper {
  constructor(prefix) {
    this._prefix = prefix;
    this._nextIdentifier = 0;
    this._idMap = new Map();
    this._reverseIdMap = new Map();
  }

  _newIdentifier() {
    return this._prefix + (this._nextIdentifier++);
  }

  createMappingForThing(thing) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(!this._reverseIdMap.has(thing));
    var id = this._newIdentifier();
    this.establishThingMapping(id, thing);
    return id;
  }

  maybeCreateMappingForThing(thing) {
    if (this.hasMappingForThing(thing)) {
      return this.identifierForThing(thing);
    }
    return this.createMappingForThing(thing);
  }

  async establishThingMapping(id, thing) {
    let continuation;
    if (Array.isArray(thing)) {
      [thing, continuation] = thing;
    }
    this._idMap.set(id, thing);
    if (thing instanceof Promise) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(continuation == null);
      await this.establishThingMapping(id, await thing);
    } else {
      this._reverseIdMap.set(thing, id);
      if (continuation) {
        await continuation();
      }
    }
  }

  hasMappingForThing(thing) {
    return this._reverseIdMap.has(thing);
  }

  identifierForThing(thing) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(this._reverseIdMap.has(thing), `Missing thing ${thing}`);
    return this._reverseIdMap.get(thing);
  }

  thingForIdentifier(id) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(this._idMap.has(id), `Missing id: ${id}`);
    return this._idMap.get(id);
  }
}


class APIPort {
  constructor(messagePort, prefix) {
    this._port = messagePort;
    this._mapper = new ThingMapper(prefix);
    this._messageMap = new Map();
    this._port.onmessage = async e => this._handle(e);
    this.messageCount = 0;

    this.Direct = {
      convert: a => a,
      unconvert: a => a
    }

    this.Stringify = {
      convert: a => a.toString(),
      unconvert: a => eval(a)
    }

    this.LocalMapped = {
      convert: a => this._mapper.maybeCreateMappingForThing(a),
      unconvert: a => this._mapper.thingForIdentifier(a)
    }

    this.Mapped = {
      convert: a => this._mapper.identifierForThing(a),
      unconvert: a => this._mapper.thingForIdentifier(a)
    }

    this.Dictionary = function(primitive) {
      return {
        convert: a => {
          var r = {};
          for (var key in a) {
            r[key] = primitive.convert(a[key]);
          }
          return r;
        }
      }
    }

    this.Map = function(keyprimitive, valueprimitive) {
      return {
        convert: a => {
          var r = {};
          a.forEach((value, key) => r[keyprimitive.convert(key)] = valueprimitive.convert(value));
          return r;
        },
        unconvert: a => {
          var r = new Map();
          for (var key in a)
            r.set(keyprimitive.unconvert(key), valueprimitive.unconvert(a[key]));
          return r;
        }
      }
    }

    this.List = function(primitive) {
      return {
        convert: a => a.map(v => primitive.convert(v)),
        unconvert: a => a.map(v => primitive.unconvert(v))
      }
    }

    this.ByLiteral = function(clazz) {
      return {
        convert: a => a.toLiteral(),
        unconvert: a => clazz.fromLiteral(a)
      }
    }
  }

  close() {
    this._port.close();
  }

  async _handle(e) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(this._messageMap.has(e.data.messageType));

    this.messageCount++;

    let handler = this._messageMap.get(e.data.messageType);
    let args;
    try {
      args = this._unprocessArguments(handler.args, e.data.messageBody);
    } catch (exc) {
      console.error(`Exception during unmarshaling for ${e.data.messageType}`);
      throw exc;
    }
    // If any of the converted arguments are still pending promises
    // wait for them to complete before processing the message.
    for (let arg of Object.values(args)) {
      if (arg instanceof Promise) {
        arg.then(() => this._handle(e));
        return;
      }
    }
    let result = this["on" + e.data.messageType](args);
    if (handler.isInitializer) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__["a" /* default */])(args.identifier);
      await this._mapper.establishThingMapping(args.identifier, result);
    }
  }

  _processArguments(argumentTypes, args) {
    var messageBody = {};
    for (var argument in argumentTypes)
      messageBody[argument] = argumentTypes[argument].convert(args[argument]);
    return messageBody;
  }

  _unprocessArguments(argumentTypes, args) {
    var messageBody = {};
    for (var argument in argumentTypes)
      messageBody[argument] = argumentTypes[argument].unconvert(args[argument]);
    return messageBody;
  }

  registerCall(name, argumentTypes) {
    this[name] = args => {
      var call = { messageType: name, messageBody: this._processArguments(argumentTypes, args) };
      this._port.postMessage(call);
    };
  }

  registerHandler(name, argumentTypes) {
    this._messageMap.set(name, {args: argumentTypes});
  }

  registerInitializerHandler(name, argumentTypes) {
    argumentTypes.identifier = this.Direct;
    this._messageMap.set(name, {
      isInitializer: true,
      args: argumentTypes,
    });
  }

  registerInitializer(name, argumentTypes) {
    this[name] = (thing, args) => {
      var call = { messageType: name, messageBody: this._processArguments(argumentTypes, args) };
      call.messageBody.identifier = this._mapper.createMappingForThing(thing);
      this._port.postMessage(call);
    };
  }

  registerRedundantInitializer(name, argumentTypes) {
    this[name] = (thing, args) => {
      if (this._mapper.hasMappingForThing(thing))
        return;
      var call = { messageType: name, messageBody: this._processArguments(argumentTypes, args) };
      call.messageBody.identifier = this._mapper.createMappingForThing(thing);
      this._port.postMessage(call);
    };
  }
}

class PECOuterPort extends APIPort {
  constructor(messagePort) {
    super(messagePort, 'o');

    this.registerCall("Stop", {});
    this.registerCall("DefineParticle",
      {particleDefinition: this.Direct, particleFunction: this.Stringify});
    this.registerRedundantInitializer("DefineHandle", {type: this.ByLiteral(__WEBPACK_IMPORTED_MODULE_2__type_js__["a" /* default */]), name: this.Direct})
    this.registerInitializer("InstantiateParticle",
      {spec: this.ByLiteral(__WEBPACK_IMPORTED_MODULE_1__particle_spec_js__["a" /* default */]), handles: this.Map(this.Direct, this.Mapped)});

    this.registerCall("UIEvent", {particle: this.Mapped, slotName: this.Direct, event: this.Direct});
    this.registerCall("SimpleCallback", {callback: this.Direct, data: this.Direct});
    this.registerCall("AwaitIdle", {version: this.Direct});
    this.registerCall("StartRender", {particle: this.Mapped, slotName: this.Direct, contentTypes: this.List(this.Direct)});
    this.registerCall("StopRender", {particle: this.Mapped, slotName: this.Direct});

    this.registerHandler("Render", {particle: this.Mapped, slotName: this.Direct, content: this.Direct});
    this.registerHandler("Synchronize", {handle: this.Mapped, target: this.Mapped,
                                    type: this.Direct, callback: this.Direct,
                                    modelCallback: this.Direct});
    this.registerHandler("HandleGet", {handle: this.Mapped, callback: this.Direct});
    this.registerHandler("HandleToList", {handle: this.Mapped, callback: this.Direct});
    this.registerHandler("HandleSet", {handle: this.Mapped, data: this.Direct});
    this.registerHandler("HandleStore", {handle: this.Mapped, data: this.Direct});
    this.registerHandler("HandleRemove", {handle: this.Mapped, data: this.Direct});
    this.registerHandler("HandleClear", {handle: this.Mapped});
    this.registerHandler("Idle", {version: this.Direct, relevance: this.Map(this.Mapped, this.Direct)});

    this.registerHandler("ConstructInnerArc", {callback: this.Direct, particle: this.Mapped});
    this.registerCall("ConstructArcCallback", {callback: this.Direct, arc: this.LocalMapped});

    this.registerHandler("ArcCreateHandle", {callback: this.Direct, arc: this.LocalMapped, type: this.ByLiteral(__WEBPACK_IMPORTED_MODULE_2__type_js__["a" /* default */]), name: this.Direct});
    this.registerInitializer("CreateHandleCallback", {callback: this.Direct, type: this.ByLiteral(__WEBPACK_IMPORTED_MODULE_2__type_js__["a" /* default */]), name: this.Direct, id: this.Direct});

    this.registerHandler("ArcCreateSlot",
      { callback: this.Direct, arc: this.LocalMapped, transformationParticle: this.Mapped, transformationSlotName: this.Direct, hostedParticleName: this.Direct, hostedSlotName: this.Direct});
    this.registerInitializer("CreateSlotCallback", {callback: this.Direct, hostedSlotId: this.Direct});
    this.registerCall("InnerArcRender", { transformationParticle: this.Mapped, transformationSlotName: this.Direct, hostedSlotId: this.Direct, content: this.Direct});

    this.registerHandler("ArcLoadRecipe", {arc: this.LocalMapped, recipe: this.Direct, callback: this.Direct});
  }
}

class PECInnerPort extends APIPort {
  constructor(messagePort) {
    super(messagePort, 'i');

    this.registerHandler("Stop", {});
    // particleFunction needs to be eval'd in context or it won't work.
    this.registerHandler("DefineParticle",
      {particleDefinition: this.Direct, particleFunction: this.Direct});
    this.registerInitializerHandler("DefineHandle", {type: this.ByLiteral(__WEBPACK_IMPORTED_MODULE_2__type_js__["a" /* default */]), name: this.Direct});
    this.registerInitializerHandler("InstantiateParticle",
      {spec: this.ByLiteral(__WEBPACK_IMPORTED_MODULE_1__particle_spec_js__["a" /* default */]), handles: this.Map(this.Direct, this.Mapped)});

    this.registerHandler("UIEvent", {particle: this.Mapped, slotName: this.Direct, event: this.Direct});
    this.registerHandler("SimpleCallback", {callback: this.LocalMapped, data: this.Direct});
    this.registerHandler("AwaitIdle", {version: this.Direct});
    this.registerHandler("StartRender", {particle: this.Mapped, slotName: this.Direct, contentTypes: this.Direct});
    this.registerHandler("StopRender", {particle: this.Mapped, slotName: this.Direct});

    this.registerCall("Render", {particle: this.Mapped, slotName: this.Direct, content: this.Direct});
    this.registerCall("Synchronize", {handle: this.Mapped, target: this.Mapped,
                                 type: this.Direct, callback: this.LocalMapped,
                                 modelCallback: this.LocalMapped});
    this.registerCall("HandleGet", {handle: this.Mapped, callback: this.LocalMapped});
    this.registerCall("HandleToList", {handle: this.Mapped, callback: this.LocalMapped});
    this.registerCall("HandleSet", {handle: this.Mapped, data: this.Direct});
    this.registerCall("HandleStore", {handle: this.Mapped, data: this.Direct});
    this.registerCall("HandleRemove", {handle: this.Mapped, data: this.Direct});
    this.registerCall("HandleClear", {handle: this.Mapped});
    this.registerCall("Idle", {version: this.Direct, relevance: this.Map(this.Mapped, this.Direct)});

    this.registerCall("ConstructInnerArc", {callback: this.LocalMapped, particle: this.Mapped});
    this.registerHandler("ConstructArcCallback", {callback: this.LocalMapped, arc: this.Direct});

    this.registerCall("ArcCreateHandle", {callback: this.LocalMapped, arc: this.Direct, type: this.ByLiteral(__WEBPACK_IMPORTED_MODULE_2__type_js__["a" /* default */]), name: this.Direct});
    this.registerInitializerHandler("CreateHandleCallback", {callback: this.LocalMapped, type: this.ByLiteral(__WEBPACK_IMPORTED_MODULE_2__type_js__["a" /* default */]), name: this.Direct, id: this.Direct});
    this.registerCall("ArcCreateSlot",
      {callback: this.LocalMapped, arc: this.Direct, transformationParticle: this.Mapped, transformationSlotName: this.Direct, hostedParticleName: this.Direct, hostedSlotName: this.Direct});
    this.registerInitializerHandler("CreateSlotCallback", { callback: this.LocalMapped, hostedSlotId: this.Direct });
    this.registerHandler("InnerArcRender", {transformationParticle: this.Mapped, transformationSlotName: this.Direct, hostedSlotId: this.Direct, content: this.Direct});

    this.registerCall("ArcLoadRecipe", {arc: this.Direct, recipe: this.Direct, callback: this.LocalMapped});
  }
}


/* unused harmony default export */ var _unused_webpack_default_export = ({ PECOuterPort, PECInnerPort });


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

let nob = () => Object.create(null);

/* harmony default export */ __webpack_exports__["a"] = (Base => class extends Base {
  constructor() {
    super();
    this._pendingProps = nob();
    this._props = this._getInitialProps() || nob();
    this._lastProps = nob();
    this._state = this._getInitialState() || nob();
    this._lastState = nob();
  }
  _getInitialProps() {
  }
  _getInitialState() {
  }
  _getProperty(name) {
    return this._pendingProps[name] || this._props[name];
  }
  _setProperty(name, value) {
    // dirty checking opportunity
    if (this._validator || this._wouldChangeProp(name, value)) {
      this._pendingProps[name] = value;
      this._invalidateProps();
    }
  }
  _wouldChangeProp(name, value) {
    return (typeof value === 'object') || (this._props[name] !== value);
  }
  _setProps(props) {
    // TODO(sjmiles): should this be a replace instead of a merge?
    Object.assign(this._pendingProps, props);
    this._invalidateProps();
  }
  _invalidateProps() {
    this._propsInvalid = true;
    this._invalidate();
  }
  _setState(state) {
    Object.assign(this._state, state);
    this._invalidate();
  }
  _async(fn) {
    // TODO(sjmiles): SystemJS throws unless `Promise` is `window.Promise`
    return Promise.resolve().then(fn.bind(this));
    //return setTimeout(fn.bind(this), 10);
  }
  _invalidate() {
    if (!this._validator) {
      //this._log('register _async validate');
      //console.log(this.localName + (this.id ? '#' + this.id : '') + ': invalidated');
      this._validator = this._async(this._validate);
    }
  }
  _validate() {
    // try..catch to ensure we nullify `validator` before return
    try {
      // TODO(sjmiles): should this be a replace instead of a merge?
      Object.assign(this._props, this._pendingProps);
      if (this._propsInvalid) {
        // TODO(sjmiles): should/can have different timing from rendering?
        this._willReceiveProps(this._props, this._state, this._lastProps);
        this._propsInvalid = false;
      }
      if (this._shouldUpdate(this._props, this._state, this._lastProps, this._lastState)) {
        // TODO(sjmiles): consider throttling render to rAF
        this._ensureMount();
        this._update(this._props, this._state, this._lastProps);
      }
    } catch(x) {
      console.error(x);
    }
    // nullify validator _after_ methods so state changes don't reschedule validation
    // TODO(sjmiles): can/should there ever be state changes fom inside _update()? In React no, in Xen yes (until I have a good reason not too).
    this._validator = null;
    // save the old props and state
    // TODO(sjmiles): don't need to create these for default _shouldUpdate
    this._lastProps = Object.assign(nob(), this._props);
    //this._lastState = Object.assign(nob(), this._state);
    this._didUpdate(this._props, this._state);
  }
  _ensureMount() {
  }
  _willReceiveProps(props, state) {
  }
  /*
  _willReceiveState(props, state) {
  }
  */
  _shouldUpdate(props, state, lastProps) {
    return true;
  }
  _update(props, state) {
  }
  _didUpdate(props, state) {
  }
});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt

/* harmony default export */ __webpack_exports__["a"] = (fetch);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identifier_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__relation_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbols_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__particle_spec_js__ = __webpack_require__(3);
/** @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */






let identifier = __WEBPACK_IMPORTED_MODULE_3__symbols_js__["a" /* default */].identifier;



// TODO: This won't be needed once runtime is transferred between contexts.
function cloneData(data) {
  return data;
  //return JSON.parse(JSON.stringify(data));
}

function restore(entry, entityClass) {
  let {id, rawData} = entry;
  var entity = new entityClass(cloneData(rawData));
  if (entry.id) {
    entity.identify(entry.id);
  }

  // TODO some relation magic, somewhere, at some point.

  return entity;
}

/** @class Handle
 * Base class for Views and Variables.
 */
class Handle {
  constructor(view, canRead, canWrite) {
    this._view = view;
    this.canRead = canRead;
    this.canWrite = canWrite;
  }
  underlyingView() {
    return this._view;
  }
  /** @method on(kind, callback, target)
   * Register for callbacks every time the requested kind of event occurs.
   * Events are grouped into delivery sets by target, which should therefore
   * be the recieving particle.
   */
  on(kind, callback, target) {
    return this._view.on(kind, callback, target);
  }

  synchronize(kind, modelCallback, callback, target) {
    return this._view.synchronize(kind, modelCallback, callback, target);
  }

  generateID() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__platform_assert_web_js__["a" /* default */])(this._view.generateID);
    return this._view.generateID();
  }

  generateIDComponents() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__platform_assert_web_js__["a" /* default */])(this._view.generateIDComponents);
    return this._view.generateIDComponents();
  }

  _serialize(entity) {
    if (!entity.isIdentified())
      entity.createIdentity(this.generateIDComponents());
    let id = entity[identifier];
    let rawData = entity.dataClone();
    return {
      id,
      rawData
    };
  }

  _restore(entry) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__platform_assert_web_js__["a" /* default */])(this.entityClass, "Handles need entity classes for deserialization");
    return restore(entry, this.entityClass);
  }

  get type() {
    return this._view._type;
  }
  get name() {
    return this._view.name;
  }

  get _id() {
    return this._view._id;
  }

  toManifestString() {
    return `'${this._id}'`;
  }
}

/** @class View
 * A handle on a set of Entity data. Note that, as a set, a View can only contain
 * a single version of an Entity for each given ID. Further, no order is implied
 * by the set. A particle's manifest dictates the types of views that need to be
 * connected to that particle, and the current recipe identifies which views are
 * connected.
 */
class Collection extends Handle {
  constructor(view, canRead, canWrite) {
    // TODO: this should talk to an API inside the PEC.
    super(view, canRead, canWrite);
  }
  query() {
    // TODO: things
  }
  /** @method async toList()
   * Returns a list of the Entities contained by the View.
   * throws: Error if this view is not configured as a readable view (i.e. 'in' or 'inout')
     in the particle's manifest.
   */
  async toList() {
    // TODO: remove this and use query instead
    if (!this.canRead)
      throw new Error("View not readable");
    return (await this._view.toList()).map(a => this._restore(a));
  }

  /** @method store(entity)
   * Stores a new entity into the View.
   * throws: Error if this view is not configured as a writeable view (i.e. 'out' or 'inout')
     in the particle's manifest.
   */
  async store(entity) {
    if (!this.canWrite)
      throw new Error("View not writeable");
    var serialization = this._serialize(entity);
    return this._view.store(serialization);
  }

  /** @method remove(entity)
   * Removes an entity from the View.
   * throws: Error if this view is not configured as a writeable view (i.e. 'out' or 'inout')
     in the particle's manifest.
   */
  async remove(entity) {
    if (!this.canWrite)
      throw new Error("View not writeable");
    var serialization = this._serialize(entity);
    return this._view.remove(serialization.id);
  }

  async debugString() {
    var list = await this.toList();
    return list ? ('[' + list.map(p => p.debugString).join(", ") + ']') : 'undefined';
  }
}

/** @class Variable
 * A handle on a single entity. A particle's manifest dictates
 * the types of views that need to be connected to that particle, and
 * the current recipe identifies which views are connected.
 */
class Variable extends Handle {
  constructor(variable, canRead, canWrite) {
    super(variable, canRead, canWrite);
  }

  /** @method async get()
  * Returns the Entity contained by the Variable, or undefined if the Variable
  * is cleared.
  * throws: Error if this variable is not configured as a readable view (i.e. 'in' or 'inout')
    in the particle's manifest.
   */
  async get() {
    if (!this.canRead)
      throw new Error("View not readable");
    var result = await this._view.get();
    if (result == null)
      return undefined;
    if (this.type.isEntity)
      return this._restore(result);
    if (this.type.isInterface)
      return __WEBPACK_IMPORTED_MODULE_5__particle_spec_js__["a" /* default */].fromLiteral(result);
    return result;
  }

  /** @method set(entity)
   * Stores a new entity into the Variable, replacing any existing entity.
   * throws: Error if this variable is not configured as a writeable view (i.e. 'out' or 'inout')
     in the particle's manifest.
   */
  async set(entity) {
    if (!this.canWrite)
      throw new Error("View not writeable");
    return this._view.set(this._serialize(entity));
  }

  /** @method clear()
   * Clears any entity currently in the Variable.
   * throws: Error if this variable is not configured as a writeable view (i.e. 'out' or 'inout')
     in the particle's manifest.
   */
  async clear() {
    if (!this.canWrite)
      throw new Error("View not writeable");
    await this._view.clear();
  }
  async debugString() {
    var value = await this.get();
    return value ? value.debugString : 'undefined';
  }
}

function handleFor(view, isSet, canRead, canWrite) {
  if (canRead == undefined)
    canRead = true;
  if (canWrite == undefined)
    canWrite = true;
  let handle;
  if (isSet || (isSet == undefined && view.type.isSetView))
    handle = new Collection(view, canRead, canWrite);
  else
    handle = new Variable(view, canRead, canWrite);
  return handle;
}

/* harmony default export */ __webpack_exports__["a"] = ({handleFor});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type_js__ = __webpack_require__(1);
// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt





// TODO: relation identifier should incorporate key/value identifiers
class Identifier {
  constructor(view, type, key) {
    this.view = type;
    this.type = type;
    this.key = key;
  }
  toLiteral() {
    return [this.view, this.type.toLiteral(), this.key];
  }
  static fromLiteral(data) {
    let [view, literalType, key] = data;
    return new Identifier(view, __WEBPACK_IMPORTED_MODULE_1__type_js__["a" /* default */].fromLiteral(literalType), key);
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (Identifier);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_fs_web_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_vm_web_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fetch_web_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__particle_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dom_particle_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__converters_jsonldToManifest_js__ = __webpack_require__(16);
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
 









function schemaLocationFor(name) {
  return `../entities/${name}.schema`;
}

class Loader {
  path(fileName) {
    let path = fileName.replace(/[\/][^\/]+$/, '/')
    return path;
  }

  join(prefix, path) {
    if (/^https?:\/\//.test(path))
      return path;
    prefix = this.path(prefix);
    return prefix + path;
  }

  loadResource(file) {
    if (/^https?:\/\//.test(file))
      return this._loadURL(file);
    return this._loadFile(file);
  }

  _loadFile(file) {
    return new Promise((resolve, reject) => {
      __WEBPACK_IMPORTED_MODULE_0__platform_fs_web_js__["a" /* default */].readFile(file, (err, data) => {
        if (err)
          reject(err);
        else
          resolve(data.toString('utf-8'));
      });
    });
  }

  _loadURL(url) {
    if (/\/\/schema.org\//.test(url)) {
      if (url.endsWith('/Thing')) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__fetch_web_js__["a" /* default */])("https://schema.org/Product.jsonld").then(res => res.text()).then(data => __WEBPACK_IMPORTED_MODULE_6__converters_jsonldToManifest_js__["a" /* default */].convert(data, {'@id': 'schema:Thing'}));
      }
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__fetch_web_js__["a" /* default */])(url + ".jsonld").then(res => res.text()).then(data => __WEBPACK_IMPORTED_MODULE_6__converters_jsonldToManifest_js__["a" /* default */].convert(data));
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__fetch_web_js__["a" /* default */])(url).then(res => res.text());
  }

  async loadParticleClass(spec) {
    let clazz = await this.requireParticle(spec.implFile);
    clazz.spec = spec;
    return clazz;
  }

  async requireParticle(fileName) {
    let src = await this.loadResource(fileName);
    // Note. This is not real isolation.
    let script = new __WEBPACK_IMPORTED_MODULE_1__platform_vm_web_js__["a" /* default */].Script(src, {filename: fileName, displayErrors: true});
    let result = [];
    let self = {
      defineParticle(particleWrapper) {
        result.push(particleWrapper);
      },
      console,
      importScripts: s => null //console.log(`(skipping browser-space import for [${s}])`)
    };
    script.runInNewContext(self, {filename: fileName, displayErrors: true});
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__platform_assert_web_js__["a" /* default */])(result.length > 0 && typeof result[0] == 'function', `Error while instantiating particle implementation from ${fileName}`);
    return this.unwrapParticle(result[0]);
  }

  unwrapParticle(particleWrapper) {
    return particleWrapper({particle: __WEBPACK_IMPORTED_MODULE_4__particle_js__["a" /* default */], Particle: __WEBPACK_IMPORTED_MODULE_4__particle_js__["a" /* default */].Particle, DomParticle: __WEBPACK_IMPORTED_MODULE_5__dom_particle_js__["a" /* default */]});
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Loader);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_assert_web_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbols_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__relation_js__ = __webpack_require__(9);
/**
 * @license
 * Copyright (c) 2017 Google Inc. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * Code distributed by Google as part of this project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */








function testEntityClass(type) {
  return new __WEBPACK_IMPORTED_MODULE_3__schema_js__["a" /* default */]({
    name: type,
    sections: [{
      sectionType: 'normative',
      fields: {'id': 'Number', 'value': 'Text'}
    }],
    parents: [],
  }).entityClass();
}

let BasicEntity = testEntityClass('BasicEntity');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  Entity: __WEBPACK_IMPORTED_MODULE_2__entity_js__["a" /* default */],
  BasicEntity,
  Relation: __WEBPACK_IMPORTED_MODULE_5__relation_js__["a" /* default */],
  testing: {
    testEntityClass,
  },
  internals: {
    identifier: __WEBPACK_IMPORTED_MODULE_1__symbols_js__["a" /* default */].identifier,
    Type: __WEBPACK_IMPORTED_MODULE_4__type_js__["a" /* default */],
  }
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// @license
// Copyright (c) 2017 Google Inc. All rights reserved.
// This code may only be used under the BSD style license found at
// http://polymer.github.io/LICENSE.txt
// Code distributed by Google as part of this project is also
// subject to an additional IP rights grant found at
// http://polymer.github.io/PATENTS.txt


class TypeVariable {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.resolution = null;
  }

  toLiteral() {
    return this;
  }

  fromLiteral(data) {
    return new TypeVariable(data.name, data.id);
  }

  get isResolved() {
    return this.resolution !== undefined;
  }

  resolve(type) {
    this.resolution = type;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (TypeVariable);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platform_fs_web_js__ = __webpack_require__(7);
/*
  Copyright 2015 Google Inc. All Rights Reserved.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/



var events = [];
if (typeof document == 'object') {
  var pid = 42;
  var now = function() {
    var t = performance.now();
    return t;
  }
} else {
  var pid = process.pid;
  var now = function() {
    var t = process.hrtime();
    return t[0] * 1000000 + t[1] / 1000;
  }
}

var flowId = 0;

function parseInfo(info) {
  if (!info)
    return {};
  if (typeof info == 'function')
    return parseInfo(info());
  if (info.toTraceInfo)
    return parseInfo(info.toTraceInfo());
  return info;
}

let module = {exports: {}};
/* harmony default export */ __webpack_exports__["a"] = (module.exports);
module.exports.enabled = false;
module.exports.enable = function() {
  module.exports.enabled = true;
  init();
};

// TODO: Add back support for options.
//module.exports.options = options;
//var enabled = Boolean(options.traceFile);

function init() {
  var result = {
    wait: function(f) {
      if (f instanceof Function) {
        return f();
      }
      return f;
    },
    resume: function() {
      return this;
    },
    start: function() {
      return this;
    },
    end: function() {
      return this;
    },
    step: function() {
      return this;
    },
    endWrap: function(fn) {
      return fn;
    },
  };
  module.exports.wrap = function(info, fn) {
    return fn;
  };
  module.exports.start = function(info, fn) {
    return result;
  };
  module.exports.async = function(info, fn) {
    return result;
  };
  module.exports.flow = function(info, fn) {
    return result;
  };
  module.exports.dump = function() {
  };

  if (!module.exports.enabled) {
    return;
  }

  module.exports.wrap = function(info, fn) {
    return function() {
      var t = module.exports.start(info);
      try {
        return fn.apply(this, arguments);
      } finally {
        t.end();
      }
    };
  };
  module.exports.start = function(info) {
    info = parseInfo(info);
    let args = info.args || {};
    let begin = now();
    return {
      end: function(endInfo) {
        if (endInfo && endInfo.args) {
          Object.assign(args, endInfo.args);
        }
        var end = now();
        events.push({
          ph: 'X',
          ts: begin,
          dur: end - begin,
          cat: info.cat,
          name: info.name,
          args: args,
        });
      },
    };
  };
  // TODO: perhaps this should just be the only API, it acts the same as
  //       start() when there is no call to wait/resume().
  module.exports.async = function(info) {
    let trace = module.exports.start(info);
    let flow;
    let baseInfo = {cat: info.cat, name: info.name + ' (async)'};
    let n = 0;
    return {
      async wait(v) {
        let result;
        if (v instanceof Promise) {
          result = f;
        } else {
          result = v();
        }
        if (!flow) {
          flow = module.exports.flow(baseInfo).start();
        }
        trace.end();
        trace = null;
        return result;
      },
      resume(info) {
        if (info) {
          Object.assign(info, baseInfo);
        } else {
          info = baseInfo;
        }
        trace = module.exports.start(info);
        flow.step(baseInfo);
      },
      end(endInfo) {
        if (flow) {
          flow.end();
        }
        trace.end(endInfo);
      },
    };
  };
  module.exports.flow = function(info) {
    info = parseInfo(info);
    var id = flowId++;
    var started = false;
    return {
      start: function() {
        var begin = now();
        started = true;
        events.push({
          ph: 's',
          ts: begin,
          cat: info.cat,
          name: info.name,
          args: info.args,
          id: id,
        });
        return this;
      },
      end: function(endInfo) {
        if (!started) return;
        var end = now();
        endInfo = parseInfo(endInfo);
        events.push({
          ph: 'f',
          bp: 'e', // binding point is enclosing slice.
          ts: end,
          cat: info.cat,
          name: info.name,
          args: endInfo && endInfo.args,
          id: id,
        });
        return this;
      },
      step: function(stepInfo) {
        if (!started) return;
        var step = now();
        stepInfo = parseInfo(stepInfo);
        events.push({
          ph: 't',
          ts: step,
          cat: info.cat,
          name: info.name,
          args: stepInfo && stepInfo.args,
          id: id,
        });
        return this;
      },
    };
  };
  module.exports.save = function() {
    events.forEach(function(event) {
      event.pid = pid;
      event.tid = 0;
      if (!event.args) {
        delete event.args;
      }
      if (!event.cat) {
        event.cat = '';
      }
    });
    return {traceEvents: events};
  };
  module.exports.dump = function() {
    __WEBPACK_IMPORTED_MODULE_0__platform_fs_web_js__["a" /* default */].writeFileSync(options.traceFile, module.exports.save());
  };
  module.exports.download = function() {
    let a = document.createElement('a');
    a.download = 'trace.json';
    a.href = 'data:text/plain;base64,' + btoa(JSON.stringify(module.exports.save()));
    a.click();
  };
}

init();

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(14)))

/***/ })
/******/ ]);
//# sourceMappingURL=worker-entry-cdn.js.map