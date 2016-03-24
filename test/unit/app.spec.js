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
            beforeAll(function(){
                spyOn(app, 'isPalindrome');
                app.isPalindrome('ala');
            });
            it('should call isPalindrome function', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('ala');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function(){
                spyOn(app, 'isPalindrome').and.callThrough();// delegacja do rzeczywistej relacji
                app.isPalindrome('ala');
            });
            it('should call isPalindrome function'+'when called to lover case is call', function() {
                expect(app.isPalindrome).toHaveBeenCalled();//zwraca prawdę jeżeli zawołano szpiega
                expect(app.isPalindrome).toHaveBeenCalledWith('ala');//zwraca prawdę dla spełnmia warónków
            });
        });

        describe('and.returnValue', function () {//Zwraca konkretną wartość
            var pointer;
            beforeAll(function(){
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it('should call isPalindrome and say true', function() {
                pointer=app.isPalindrome('ala');
                expect(pointer).toEqual(true);
            });
            it('should call generateMessage and say true', function() {
                pointer=app.generateMessage('ala');
                expect(pointer).toEqual({ vowel: 2, palindrome: true });
            });
        });

        describe('and.callFake', function () {//zapytania będą przekierowane do dołączonej funkcji
            var pointer;
            beforeAll(function(){
                spyOn(app, 'isPalindrome').and.callFake(function(str){
                    var strTemp = str.toLowerCase(),
                        strLength = strTemp.length;
                    if (str === '') {
                        return false;
                    }
                    var halfLength = (strLength % 2 === 0) ? (strLength / 2) : ((strLength - 1) / 2);
                    for (var i = 0; i < halfLength; i++) {
                        if (strTemp[i] !== strTemp.slice(-1 - i)[0]) {
                            return false;
                        }
                    }
                    return true
                });
                it('should call isPalnidrom fake function', function() {
                    pointer=app.toLowerCase('ala');
                    expect(pointer).toBe('ala');
                });
                it('should call generateMessage fake function', function() {
                    pointer=app.generateMessage('ala');
                    expect(pointer).toEqual({ vowel: 2, palindrome: true });
                });
            });
        });
        describe('calls.count()', function () {//zwraca liczbę wywołań szpiega
            var pointer;
            beforeAll(function(){
                spyOn(app, 'isPalindrome').and.callThrough()
                });
            it('should call isPalnidrom calls', function() {
                pointer=app.isPalindrome('ala');
                expect(app.isPalindrome.calls.count()).toBe(1);
            });
            it('should call generateMessage calls', function() {
                pointer=app.generateMessage('sedes');
                expect(app.isPalindrome.calls.count()).toBe(2);
            });
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function(){
                spyOn(app, 'vowelCount');
                app.vowelCount('ala');
            });
            it('should call vowelCount function', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('ala');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function(){
                spyOn(app, 'vowelCount').and.callThrough();// delegacja do rzeczywistej relacji
                app.vowelCount('ala');
            });
            it('should call vowelCount function'+'when called to lover case is call', function() {
                expect(app.vowelCount).toHaveBeenCalled();//zwraca prawdę jeżeli zawołano szpiega
                expect(app.vowelCount).toHaveBeenCalledWith('ala');//zwraca prawdę dla spełnmia warónków
            });
        });

        describe('and.returnValue', function () {
            var pointer;
            beforeAll(function(){
                spyOn(app, 'vowelCount').and.returnValue(2);
            });
            it('should call vowelCount and say true', function() {
                pointer=app.vowelCount('ala');
                expect(pointer).toEqual(2);
            });
            it('should call generateMessage and say true', function() {
                pointer=app.generateMessage('ala');
                expect(pointer).toEqual({ vowel: 2, palindrome: true });
            });
        });

        describe('and.callFake', function () {
            var pointer;
            beforeAll(function(){
                spyOn(app, 'vowelCount').and.callFake(function(str){
                    var vowelList = 'aeiouyAEIOUY',
                        vovCount = 0;
                    for (var i = 0, strLength = str.length; i < strLength; i++) {
                        if (vowelList.indexOf(str[i]) !== -1) {
                            vovCount++;
                        }
                    }
                    return vovCount;
                });
                it('should call vowelCount fake function', function() {
                    pointer=app.vowelCount('ala');
                    expect(pointer).toBe('ala');
                });
                it('should call generateMessage fake function', function() {
                    pointer=app.generateMessage('ala');
                    expect(pointer).toEqual({ vowel: 2, palindrome: true });
                });
            });
        });

        describe('calls.count()', function () {
            var pointer;
            beforeAll(function(){
                spyOn(app, 'vowelCount').and.callThrough()
            });
            it('should call vowelCount fake function', function() {
                pointer=app.vowelCount('ala');
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it('should call generateMessage calls', function() {
                pointer=app.generateMessage('sedes');
                expect(app.vowelCount.calls.count()).toBe(2);
            });
        });
    });

});

