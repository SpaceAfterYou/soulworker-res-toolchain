import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.uint8("v1")
	.uint16("v2")
	.uint16("v3")
	.uint16("v4")
	.uint16("v5")
	.uint16("v6")
	.uint16("v7")
	.uint16("v8")
	.uint16("v9")
	.uint16("v10")
	.uint16("v11")
	.uint16("v12")
	.uint16("v13")