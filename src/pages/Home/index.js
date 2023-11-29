import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import config from '../../config';
import * as songService from '../../services/songService';

function Home() {
    const [songs, setSongs] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [song, setSong] = useState({});

    const fetchApi = async () => {
        const res = await songService.search(searchValue);
        setSongs(res);
    };

    useEffect(() => {
        fetchApi();
    }, [searchValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleSong = async (id) => {
        const res = await songService.detail(id);
        setSong(res);
    };

    const handleStatus = async (id) => {
        const song = await songService.detail(id);
        song.status = 'Công khai';
        await songService.put(id, song);
        fetchApi();
    };

    return (
        <div>
            <h2 className="text-center mt-4">Kho nhạc</h2>

            <div
                className="mb-4 d-flex align-items-center justify-content-between"
                style={{ width: '100%', height: '60px' }}
            >
                <div>
                    <h2>{song.title}</h2>
                    <h4>{song.artist}</h4>
                </div>
                <Link
                    to={config.routes.create}
                    className="btn btn-success d-inline-block"
                >
                    Đăng ký bài hát
                </Link>
            </div>

            <div className="mb-2 d-flex align-items-center justify-content-between">
                <div></div>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        placeholder="Nhập tên bài hát"
                        value={searchValue}
                        onChange={handleChange}
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Tìm
                    </button>
                </form>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên bài hát</th>
                        <th>Ca sĩ</th>
                        <th>Thời gian phát</th>
                        <th>Số lượt yêu thích</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => (
                        <tr key={song.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.time}</td>
                            <td>{song.like}</td>
                            {song.status === 'Lưu trữ' ? (
                                <td>Lưu trữ</td>
                            ) : (
                                <td>Công khai</td>
                            )}
                            <td>
                                <button
                                    className="btn btn-secondary me-2"
                                    onClick={() => handleStatus(song.id)}
                                >
                                    Công khai
                                </button>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleSong(song.id)}
                                >
                                    Phát nhạc
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
