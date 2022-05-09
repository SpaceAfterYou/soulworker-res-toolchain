import { Parser } from 'binary-parser';
import '../../sw-string';

export default (parser = new Parser()) => parser
	.uint16("v0")
	.swstring("v1")
	.uint32("v2")
	.swstring("v3")
	.swstring("v4")
	.uint16("v5")
	.uint16("v6")
	.uint16("v7")
	.uint32("v8")
	.uint32("v9")