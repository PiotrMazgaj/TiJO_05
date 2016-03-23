describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('sedes', function () {
            expect(app.generateMessage('sedes')).toEqual({ vowel: 2, palindrome: true });
            expect(app.generateMessage('piotr')).toEqual({ vowel: 2, palindrome: false });
            expect(app.generateMessage('ala')).toEqual({ vowel: 2, palindrome: true });
            expect(app.generateMessage('aaaaa')).toEqual({ vowel: 5, palindrome: true });
        });
    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });

});

