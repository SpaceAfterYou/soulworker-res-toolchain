import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.int16("v1")
	.int16("v2")
	.int16("v3")
	.int16("v4")
	.int16("v5")
	.int16("v6")
	.int16("v7")
	.int16("v8")
	.int16("v9")