#!/usr/bin/env node

const fs = require('fs') 
const { promisify } = require('util')
const program = require('commander')
const pacote = require('pacote')
const packageConfig = require('./package')

